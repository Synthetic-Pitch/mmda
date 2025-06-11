'use client'
import { Textarea } from '@/shadcn/ui/textarea'
import React, { useState } from 'react'

const Phase1 = () => {
    const [number,setNUmber] = useState<string >('')
    const [name,setName] = useState<string>('');
    const [gmail,setGmail] = useState<string>('')
    const [message,setMessage] = useState<string>('')
    
    const submit = ()=>{
        setNUmber('')
        setName('')
        setGmail('')
        setMessage('')
    }

    return (
        <div className='h-full w-[60%] bg-[#8B8787] pt-[10vh] relative flex justify-center '>
            <main className='w-[60%]'>
                    <h1 className='font-karantina text-white text-[12vh] text-center select-none'>
                        CONTACT US
                    </h1>
                    <section className='h-[60vh] w-[100%] bg-[#D9D9D9] rounded-tr-[8vh] px-[2vw] py-[3vh] flex flex-col gap-[2vh]'>
                        <input 
                            type="text" placeholder='NAME' 
                            className='bg-[#C0C0C0] h-[6vh] w-[90%] text-[2.5vh] px-[1.5vh] font-karantina text-[#8B8787] tracking-widest placeholder:text-[3vh] placeholder:select-none'
                            value={name}
                            onChange={(e)=>{
                            setName(e.target.value)  
                            }}
                        />
                        <input 
                            type="string" placeholder='NUMBER' 
                            className='bg-[#C0C0C0] h-[6vh] w-[90%] text-[2.5vh] px-[1.5vh] font-karantina text-[#8B8787] tracking-widest placeholder:text-[3vh] placeholder:select-none'
                            value={number}
                            onChange={(e)=> {
                                const val = e.target.value.replace(/\D/g,'');
                                setNUmber(val)
                            }}
                        />
                        <input 
                            type="text" placeholder='GMAIL' 
                            className='bg-[#C0C0C0] h-[6vh] w-[90%] text-[2.5vh] px-[1.5vh] font-karantina text-[#8B8787] tracking-widest placeholder:text-[3vh] placeholder:select-none'
                            value={gmail}
                            onChange={(e)=>{
                                setGmail(e.target.value)
                            }}
                        />
                        <Textarea 
                            className='flex-grow w-[90%] border-none bg-[#C0C0C0] placeholder:font-karantina placeholder:opacity-[.4] placeholder:text-[3vh] !text-[2.5vh] font-karantina text-[#8B8787] tracking-widest px-[1.5vh] py-[.8vh] placeholder:select-none' placeholder='MESSAGE'
                            value={message}
                            onChange={(e)=>{
                                const target = e.target as HTMLTextAreaElement;
                                setMessage(target.value);
                            }}
                        />

                        <div
                            className='h-[6vh] w-full flex items-center justify-center'
                        >
                            <button 
                                className='text-[4vh] tracking-wide text-[#aaaaaa] cursor-pointer font-karantina hover:scale-[1.1] transition-transform duration-100 select-none
                            ' onClick={submit}>SEND</button>
                        </div>
                    </section>
            </main>
        </div>
    )
}

export default Phase1