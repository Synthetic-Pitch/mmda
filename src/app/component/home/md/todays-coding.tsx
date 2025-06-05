'use client'
import UseDateHook from '@/app/hooks/dateHook';
import React from 'react';

const TodaysCoding = () => {
    const {date,code}  = UseDateHook();

    return (
        <div className='bg-[#D0D8FF] pt-12'>
            <h1 className='font-poppins text-3xl font-bold text-center text-[#94A6FF]'>TODAY’S CODING</h1>
            <section className='h-[180px] flex justify-start items-center px-16 mt-6 pb-8'>
                <figure className='h-full w-[180px] bg-[#9F9F9F] flex flex-col items-center justify-center gap-2 rounded-3xl'>
                    <h2 className='font-poppins font-bold text-[#D0D8FF] text-2xl'>{date}</h2>
                    <h1 className='font-extrabold text-4xl text-white'> {code}</h1>
                </figure>
            </section>
            <main className='bg-[#D9D9D9] h-[500px] w-[80%] m-auto flex flex-col justify-evenly'>
                <aside className='flex justify-evenly'>
                    <div className='h-[200px] w-[200px] flex flex-col items-center justify-center gap-3'>
                        <h2 className='text-4xl text-[#8BA57B] font-bold'>monday</h2>
                        <h1 className='text-5xl font-bold'>1-2</h1>
                    </div>
                    <div className='h-[200px] w-[200px] flex flex-col items-center justify-center gap-3'>
                        <h2 className='text-4xl text-[#8BA57B] font-bold'>tuesday</h2>
                        <h1 className='text-5xl font-bold'>3-4</h1>
                    </div>
                    <div className='h-[200px] w-[200px] flex flex-col items-center justify-center gap-3'>
                        <h2 className='text-4xl text-[#8BA57B] font-bold'>wendnesday</h2>
                        <h1 className='text-5xl font-bold'>5-6</h1>
                    </div>
                </aside>
                <aside className='flex justify-evenly'>
                    <div className='h-[200px] w-[200px] flex flex-col items-center justify-center gap-3'>
                        <h2 className='text-4xl text-[#8BA57B] font-bold'>thursday</h2>
                        <h1 className='text-5xl font-bold'>7-8</h1>
                    </div>
                    <div className='h-[200px] w-[200px] flex flex-col items-center justify-center gap-3'>
                        <h2 className='text-4xl text-[#8BA57B] font-bold'>wendnesday</h2>
                        <h1 className='text-5xl font-bold'>9-0</h1>
                    </div>
                </aside>
            </main>
            <section className='py-10'>
                <h1 className='text-6xl font-markdown text-[#8BA57B] text-center font-bold tracking-wider'>MAJOR ROADS</h1>
                <ul className='grid grid-cols-3 bg-[red]'>
                    <li>asdsad</li>
                    <li>sadsadsd</li>
                    <li>a23</li>
                </ul>
            </section>
        </div>
    );
};

export default TodaysCoding;