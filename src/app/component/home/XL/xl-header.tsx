import React from 'react';
import XlButtons from '../../landingPage/XL/xl-buttons';

const XlHeader = () => {
    return (
        <header className='h-[80px] w-full bg-[#94A6FF] flex items-center justify-end gap-8 px-10 font-poppins text-white'>
            <XlButtons/>
        </header>
    );
};

export default XlHeader;