'use client'
import React from 'react';
import UseSubmissionHook from '@/app/hooks/submissionHook';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineLoading } from "react-icons/ai";
import Modal from './Modal';

type Props = {
    pages: {
        step: string;
        description: string;
    }[];
    param:number;
}
const Card = ({pages,param}:Props) => {
    const { handleSubmit,handleImage,ImgSrc,isReclamation,hider,handleDelete,loading,isModal,setModal,transasctionHashID} = UseSubmissionHook(param);

    return (
        <main className='w-[500px]'>
            <h1 className='font-poppins text-3xl py-8 text-center'>{pages[param-1].step}</h1>
            <p className='text-md px-6 h-[10%] text-center select-none '>{pages[param-1].description}</p>
            {/* USER SUBMIT IMAGE */}
            <section className='flex items-center justify-center w-full h-[200px]'>
                {
                    isReclamation ? (
                        <main>
                            <section className='flex items-center pb-8 gap-2'>
                                {   
                                    ImgSrc.img1 && 
                                        <div className='relative'>
                                            <Image src={ImgSrc.img1} alt='' height={120} width={90} className='rounded-md object-contain' draggable={false}/>
                                            <span 
                                                onClick={()=>handleDelete({a:param,b:ImgSrc.img1})}
                                                className='absolute bottom-[90%] -right-2 bg-[#cecece] rounded-full px-1.5 text-sm cursor-pointer'>X</span>
                                        </div>
                                }
                                {
                                    ImgSrc.img2 && 
                                        <div className='relative'>
                                            <Image src={ImgSrc.img2} alt='' height={120} width={90} className='rounded-md object-contain' draggable={false}/>
                                            <span 
                                                onClick={()=>handleDelete({a:param,b:ImgSrc.img2})}
                                                className='absolute bottom-[90%] -right-2 px-1.5 rounded-full bg-[#cecece] cursor-pointer'>X</span>
                                        </div>
                                }
                            </section>
                            {
                                ImgSrc.img1 === '' || ImgSrc.img2 === '' &&
                                    <>
                                        {
                                            !hider && (
                                                <>
                                                    <label htmlFor="file-picker2" className='text-center w-[30px] px-8 py-2 rounded-xl border-1 border-black'>import</label>
                                                    <input type="file" accept='image/*' id='file-picker2' onChange={(e)=>handleImage(e,param)} className='hidden'/>
                                                </>
                                            )
                                        }
                                    </>
                            }
                        </main>
                    ) : (
                        <>
                            <label 
                                htmlFor="file-picker" 
                                className='border-2 border-[#4d4d4d] w-1/2 max-w-[300px] h-[60px] tracking-widest flex items-center justify-center font-jura font-bold rounded-2xl cursor-pointer'>import</label>
                            <input
                                type="file" 
                                id='file-picker' 
                                accept='image/*'
                                capture='environment' 
                                onChange={(e)=>handleImage(e,param)} //User push an image to custom hook together with a param
                                className='hidden'/>
                        </>
                    )
                }
            </section>
            <footer className=' w-full px-10 py-4 flex'>
                <aside className='w-1/2'>
                    {
                        param > 1 &&
                        <Link href={`/reclamation/${param-1}`} 
                            className='text-xl flex items-center'>
                            <IoIosArrowBack size={30} className=''/>previous</Link>
                    }
                </aside>
                {/* FINAL SUBMISSION */}
                <aside className='w-1/2 flex justify-end'>
                    {   
                        param < 4 ?
                            <Link href={`/reclamation/${param+1}`} 
                                className='text-xl flex items-center'>next
                                <IoIosArrowBack size={30} className='rotate-180'/></Link>
                            :
                            <div className='flex items-center gap-2 relative'>
                                <div onClick={handleSubmit} className='text-xl cursor-pointer'>submit</div>
                                { loading &&  <AiOutlineLoading className='absolute left-[110%] animate-spin'/> }
                            </div>
                    }
                </aside>
            </footer>
            {   
                isModal &&  <Modal transasctionHashID={transasctionHashID} isModal={isModal} setModal={setModal}/>
            }
        </main>
    );
};

export default Card;