import React from 'react';
import Image from 'next/image';
const XL = () => {
    return (
        <div className='relative font-poppins z-10'>
           <header
            className='h-22 w-full flex items-center justify-between'
           >
                <figure className='w-[10%] h-[80%] relative '>
                    <Image src ="/assets/icons/mmda-icon.png" alt="" fill className='object-contain'/>
                </figure>
                <main className='w-[40%] h-full flex items-center justify-evenly'>
                    <button className='cursor-pointer'>impound info</button>
                    <button className='cursor-pointer'>FAQs</button>
                    <button className='cursor-pointer'>contact us</button>
                    <button className='cursor-pointer'>about us</button>
                </main>
           </header>
           <h1 className='text-[5rem] font-lakki'>
                MEtropolitan manila development authority
           </h1>
        </div>
    );
};

export default XL;