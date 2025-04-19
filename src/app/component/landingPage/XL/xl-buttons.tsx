'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const XlButtons = () => {
    const route = useRouter();
    
    return (
        <div className='text-[2vh] flex gap-6'>
            <button 
                className='cursor-pointer font-kadwa' onClick={()=>route.push('/impound-info')}>impound info
            </button>

            <button 
                className='cursor-pointer font-kadwa' onClick={()=>route.push('/faqs')}>FAQs
            </button>

            <button 
                className='cursor-pointer font-kadwa' onClick={()=>route.push('/contact-us')}>contact us
            </button>

            <button 
                className='cursor-pointer font-kadwa' onClick={()=>route.push('/about-us')}>about us
            </button>
        </div>
    );
};

export default XlButtons;