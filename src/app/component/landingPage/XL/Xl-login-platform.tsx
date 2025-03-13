
import React from 'react';
import Image from 'next/image';

const XlLoginPlatform = () => {
    return (
        <div className='h-[70%] w-[70%] bg-[rgb(229,229,229,.42)] flex items-center rounded-3xl px-2 select-none'>
            <div className='h-[60%] w-[30%] relative cursor-pointer'>
                <Image src="/assets/icons/facebook.png" alt='' fill draggable={false} className='object-contain'/>
            </div>
            <div className='h-[60%] w-[30%] relative cursor-pointer'>
                <Image src="/assets/icons/search.png" alt='' fill draggable={false} className='object-contain'/>
            </div>
            <div className='h-[60%] w-[30%] relative cursor-pointer'>
                <Image src="/assets/icons/github.png" alt='' fill draggable={false} className='object-contain'/>
            </div>
        </div>
    );
};

export default XlLoginPlatform;