'use client'
import useContactUs from '@/app/hooks/contactUsHook';
import React from 'react';



const SmBody = () => {
    const { 
        handleSubmit,number,name,gmail,message,
        handleName,handleNumber,handleMessage,handleGmail 
    } = useContactUs();
    
    return (
        <div className='relative'>
            <section className='absolute top-0 w-full h-[100dvh]'>
                <div className='h-[40%] w-full bg-[#8B8787]'/>
                <div className='h-[60%] w-full bg-[#5B5B5B]'/>
            </section>
            <section className='relative z-10 h-[100dvh] pt-12'>
                <h1 className='flex justify-center items-center font-karantina text-5xl py-6 text-white'>CONTACT US</h1>
                <main className='bg-[#D9D9D9] w-[90%] m-auto py-8 flex flex-col items-center justify-center gap-3'>
                    <input 
                        type="text" placeholder='name' value={name} onChange={handleName}
                        className=' flex items-center bg-[#C0C0C0] w-[90%] h-12 px-2 font-karantina text-2xl placeholder:text-[#8B8787]'    
                    />
                    <input 
                        type="text" placeholder='number' value={number} onChange={handleNumber}
                        className=' flex items-center bg-[#C0C0C0] w-[90%] h-12 px-2 font-karantina text-2xl placeholder:text-[#8B8787]'    
                    />
                    <input 
                        type="text" placeholder='gmail' value={gmail} onChange={handleGmail}
                        className=' flex items-center bg-[#C0C0C0] w-[90%] h-12 px-2 font-karantina text-2xl placeholder:text-[#8B8787] '   
                    />
                    <textarea 
                        placeholder='message' value={message} onChange={handleMessage}
                        className='w-[90%] h-30 py-2 px-2 bg-[#C0C0C0] font-karantina text-2xl placeholder:text-[#8B8787]'/>
                    <button
                        onClick={handleSubmit} 
                        className='flex items-center justify-center font-karantina text-2xl text-[#8B8787] cursor-pointer px-6'>send</button>
                </main>
                <section className='relative flex flex-col items-center py-8 text-white'>
                    <h1>MARIKINA CITY</h1>
                    <h2>genuiuneopower123@gmail.com</h2>
                    <h1>REYMARK DEQUITO</h1>
                </section>
                
            </section>
           
        </div>
    );
};

export default SmBody;