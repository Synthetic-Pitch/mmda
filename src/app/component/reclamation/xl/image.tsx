'use client'
import { AnimatePresence } from 'framer-motion';
import React, {useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import {setGov_ID_Image1,setGov_ID_Image2} from '@/app/redux/reclamation'
import Image from 'next/image';


type Props = {
    param: number;
};
type State = {
    reclamationSlice:{
        Gov_ID:{
            image1:string;
            image2:string;
        },
        OR_CR:{
            image1:string;
            image2:string;
        },
        Ticket:{
            image1:string;
        },
        License:{
            image1:string;
            image2:string;
        }
    }
}

const ImageImport = ({ param }: Props) => {
    
    const reclamation = useSelector((state:State)=>state.reclamationSlice);
    const dispatch = useDispatch();


    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target || e.target.files === null || e.target.files === null) return;
        
        switch(true){
            case param === 1:
                if(reclamation.Gov_ID.image1 === ''){
                    dispatch(setGov_ID_Image1(URL.createObjectURL(e.target.files[0])));
                }else if(reclamation.Gov_ID.image2 === ''){
                    dispatch(setGov_ID_Image2(URL.createObjectURL(e.target.files[0])));
                }
                else return;
                break;
        }
    };

    return ( 
        <div className='h-full w-full flex flex-col items-center justify-center gap-[2vh]'>
            
            <div className='flex gap-[2vw] relative'>
                <AnimatePresence>
                    {
                        reclamation.Gov_ID.image1 !== '' && param === 1 && (
                            <motion.div 
                                initial={{opacity:0, scale:0}}
                                animate={{opacity:1, scale:1}}
                                className='relative'>
                                <span 
                                    onClick={()=>dispatch(setGov_ID_Image1(''))}
                                    className='absolute top-0 left-[92%] text-[1.1vw] bg-white px-[.5vw] rounded-full cursor-pointer'>X</span>
                                <Image src={reclamation.Gov_ID.image1} alt='' width={50} height={50} draggable={false} className='w-[10vw] h-[10vw] object-contain'/>
                            </motion.div>
                        )
                    }
                    {
                        reclamation.Gov_ID.image2 !== '' && param === 1 && (
                            <motion.div 
                                initial={{opacity:0, scale:0}}
                                animate={{opacity:1, scale:1}}
                                className='relative'>
                                <span 
                                    onClick={()=>dispatch(setGov_ID_Image2(''))}
                                    className='absolute top-0 left-[92%] text-[1.1vw] bg-white px-[.5vw] rounded-full cursor-pointer'>X</span>
                                <Image src={reclamation.Gov_ID.image2} alt='' width={50} height={50} draggable={false} className='w-[10vw] h-[10vw] object-contain'/>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
               
            </div>
               
            

            <label
                htmlFor="imgURL"
                className={`py-[1vw] px-[3vw] border-1 border-black text-[1.2vw] rounded-2xl cursor-pointer 
                    ${reclamation.Gov_ID.image1 !== '' && reclamation.Gov_ID.image2 !== '' && param === 1 ? 'hidden':'block'}`}
            >import image</label>

            <input 
                type="file" 
                id='imgURL' 
                className='hidden'  
                onChange={handleSubmit} 
                multiple 
            />
        </div>
    );
};

export default ImageImport;