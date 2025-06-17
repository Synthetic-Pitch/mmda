

import MdBody from '@/app/component/about-us/md/mdBody';
import SmBody from '@/app/component/about-us/sm/sm-body';
import XlFooter from '@/app/component/about-us/XL/xl-footer';
import XlHeader from '@/app/component/about-us/XL/xl-header';
import XlUpperBody from '@/app/component/about-us/XL/xl-upper-body';
import MobileNav from '@/app/component/navbar/mobileNav';
import TabletNav from '@/app/component/navbar/tabletNav';
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
            <section className='sm:hidden relative'>
                <MobileNav/>
                <SmBody/>
            </section>
            <section className='hidden sm:block lg:hidden relative'>
                <TabletNav/>
                <MdBody/>
            </section>
        </div>
    );
};

export default Page;