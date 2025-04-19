'use client'
import XlHeader from '@/app/component/about-us/XL/xl-header';
import XlUpperBody from '@/app/component/about-us/XL/xl-upper-body';
import React from 'react';

const Page = () => {

    return (
        <div>
            <section className='hidden lg:flex flex-col justify-center h-screen max-h-[1500px]'>
                <XlHeader/>
                <XlUpperBody/>
            </section>
        
            <section className='hidden lg:flex flex-col h-screen max-h-[1500px]'>
                asd
            </section>
        </div>
    );
};

export default Page;