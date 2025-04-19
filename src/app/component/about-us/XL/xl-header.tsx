import React from 'react';

const XlHeader = () => {
    return (
        <div className='flex justify-end px-8 py-6 bg-[#94A6FF]'>
            <main className='flex gap-8 select-none'>
                <h2 className='cursor-pointer font-kadwa text-sm text-[white]'>impound info</h2>
                <h2 className='cursor-pointer font-kadwa text-sm text-[white]'>FAQs</h2>
                <h2 className='cursor-pointer font-kadwa text-sm text-[white]'>contact us</h2>
            </main>
        </div>
    );
};

export default XlHeader;