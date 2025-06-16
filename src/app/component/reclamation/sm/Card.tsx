'use client'

import UseSubmissionHook from '@/app/hooks/submissionHook';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IoIosArrowBack } from "react-icons/io";

type Props = {
    pages: {
        step: string;
        description: string;
    }[];
    param:number;
}

const Card = ({pages,param}:Props) => {
    const { handleSubmit,handleImage,ImgSrc,isReclamation,hider} = UseSubmissionHook(param);

    return (    
        <main className='flex flex-col items-center justify-center gap-[20px] h-full w-full'>
            
            <h1 className='font-poppins text-3xl py-8'>{pages[param-1].step}</h1>
            
            <p className='text-md px-6 h-[10%] text-center select-none '>{pages[param-1].description}</p>
            {/* USER SUBMIT IMAGE */}
            <section className='flex items-center justify-center w-full h-[200px]'>
                {
                    isReclamation ? (
                        <main className='flex justify-center gap-2 overflow-hidden'>
                            {
                                ImgSrc.img1 && <Image src={ImgSrc.img1} alt='' height={120} width={120} className='rounded-md'/>
                            }
                            {
                                ImgSrc.img2 && <Image src={ImgSrc.img2} alt='' height={120} width={120} className='rounded-md'/>
                            }
                            {
                                ImgSrc.img1 === '' || ImgSrc.img2 === '' &&
                                    <>
                                        {
                                            !hider && (
                                                <>
                                                    <label htmlFor="file-picker2">import</label>
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
                        <Link href={`/reclamation/${param-1}`} className='text-xl flex items-center'><IoIosArrowBack size={30}/>previous</Link>
                    }
                </aside>
                {/* FINAL SUBMISSION */}
                <aside className='w-1/2 flex justify-end'>
                    {   
                        param < 4 ?
                            <Link href={`/reclamation/${param+1}`} className='text-xl flex items-center'>next<IoIosArrowBack size={30} className='rotate-180'/></Link>
                            :
                            <div onClick={handleSubmit} className='text-xl cursor-pointer'>submit</div>
                    }
                </aside>
            </footer>
        </main>
    );
};

export default Card;