'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { TiThMenuOutline } from "react-icons/ti";

const Menu = () => {
    const [isOpen,setModal] = useState(false);
    

    useEffect(()=>{
        if(isOpen){
          
        }else {
           
        }
    },[isOpen])

    return (
        <div className='w-full h-full'>
            <TiThMenuOutline onClick={()=>setModal(!isOpen)} className='h-full w-full cursor-pointer'/>
            {
                isOpen && (
                    <dialog open className='absolute top-[8vh] z-40 h-[26vh] w-[14vw] -ml-[10vw] bg-transparent'>
                        <div
                            className='h-full w-full bg-[#5B5B5B] text-[white] flex flex-col justify-center gap-[3%] font-poppins 
                            text-[1.1vw] px-[1.8vw] rounded-[2vw]'>
                            <Link href={'/home'}>home</Link>
                            <Link href={'/impound-info'}>impound-info</Link>
                            <Link href={'/contact-us'}>contact-us</Link>
                            <Link href={'/about-us'}>about-us</Link>
                        </div>
                    </dialog>
                )
            }
        </div>
  )
}

export default Menu