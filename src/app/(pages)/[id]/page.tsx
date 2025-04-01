

import XlFloodControl from '@/app/component/home/XL/xl-floodControl';
import XlHeader from '@/app/component/home/XL/xl-header';
import XlNavigation from '@/app/component/home/XL/xl-navigation';
import XlTodaysCoding from '@/app/component/home/XL/xl-todaysCoding';
import React from 'react';

const Home = () => {

    return (
        <div>
            <section className='hidden lg:block'>
                <figure className='flex flex-col h-[100vh] max-h-[1500px]'>
                    <XlHeader/>
                    <XlNavigation/>
                    <XlFloodControl/>
                </figure>
                <figure className='flex flex-col h-[100vh] max-h-[1500px]'>
                    <XlTodaysCoding/>
                </figure>
                
            </section>
            
        </div>
    );
};

export default Home;