'use client'
import XlFooter from '@/app/component/about-us/XL/xl-footer';
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
        
            <section 
                className='hidden lg:flex flex-col h-screen max-h-[1500px] relative'
            >
                <div 
                    style={{clipPath:'polygon(0% 89%, 15% 83%, 33% 89%, 60% 77%, 71% 95%, 100% 66%, 100% 100%, 0% 100%)',height:'700px',width:'100%',bottom:'100%',position:'absolute'}}
                    className='bg-[#cecece]'
                />
                <XlFooter/>
            </section>
        </div>
    );
};

export default Page;