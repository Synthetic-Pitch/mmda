'use client'
import useContactUs from '@/app/hooks/contactUsHook';
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const MdBody = () => {
     const { 
        handleSubmit,number,name,gmail,message,
        handleName,handleNumber,handleMessage,handleGmail 
    } = useContactUs();
    return (
        <div className='bg-[#8B8787] pt-16 pb-4 w-full relative'>
            <h1 className='text-center text-6xl font-karantina text-white py-4'>CONTACT-US</h1>
            <main className='w-[60%] max-w-[500px] m-auto bg-[#D9D9D9] py-8 px-8 flex flex-col gap-4'>
                <input 
                    type="text" placeholder='name' value={name} onChange={handleName} 
                    className='bg-[#C0C0C0] w-full placeholder:text-[#8B8787] font-karantina px-2 placeholder:text-4xl py-2 text-3xl' />
                <input 
                    type="text" placeholder='number' value={number} onChange={handleNumber}
                    className='bg-[#C0C0C0] w-full placeholder:text-[#8B8787] font-karantina px-2 placeholder:text-4xl py-2 text-3xl' />
                <input 
                type="text" placeholder='gmail' value={gmail} onChange={handleGmail}
                className='bg-[#C0C0C0] w-full placeholder:text-[#8B8787] font-karantina px-2 placeholder:text-4xl py-2 text-3xl' />
                <textarea 
                    placeholder='message' value={message} onChange={handleMessage}
                    className='w-full h-30 py-2 px-2 bg-[#C0C0C0] font-karantina text-3xl placeholder:text-[#8B8787] placeholder:text-4xl '/>
                <button
                    onClick={handleSubmit} 
                    className='flex items-center justify-center font-karantina text-4xl text-[#8B8787] cursor-pointer px-6'>send</button>
            </main>
            <footer className='flex flex-col items-center justify-center gap-2 pt-8 text-white'>
                <h1 className='flex items-center gap-2'><FaLocationDot size={20}/>MARIKINA CITY</h1>
                <h2>genuiuneopower123@gmail.com</h2>
                <h1>REYMARK DEQUITO</h1>
            </footer>
        </div>
    );
};

export default MdBody;