'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const XlButtons = () => {
    const route = useRouter();
    return (
        <>
            <button className='cursor-pointer font-kadwa'>impound info</button>
            <button className='cursor-pointer font-kadwa'>FAQs</button>
            <button className='cursor-pointer font-kadwa'>contact us</button>
            <button className='cursor-pointer font-kadwa' onClick={()=>route.push('/about-us')}>about us</button>
        </>
    );
};

export default XlButtons;