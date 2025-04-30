'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const XlHeader = () => {
    const route = useRouter();
    return (
        <div className='flex justify-end px-8 py-6 bg-[#94A6FF]'>
            <main className='flex gap-8 select-none'>
                <h2 className='cursor-pointer font-kadwa text-sm text-[white]' onClick={()=>route.push('/home')}>home</h2>
                <h2 className='cursor-pointer font-kadwa text-sm text-[white]' onClick={()=>route.push('/impound-info')}>impound info</h2>
                <h2 className='cursor-pointer font-kadwa text-sm text-[white]' onClick={()=>route.push('/faqs')}>FAQs</h2>
                <h2 className='cursor-pointer font-kadwa text-sm text-[white]' onClick={()=>route.push('/contact-us')}>contact us</h2>
            </main>
        </div>
    );
};

export default XlHeader;