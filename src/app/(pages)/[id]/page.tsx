

import XlFloodControl from '@/app/component/home/XL/xl-floodControl';
import XlHeader from '@/app/component/home/XL/xl-header';
import XlNavigation from '@/app/component/home/XL/xl-navigation';
import XlTodaysCoding from '@/app/component/home/XL/xl-todaysCoding';
import XlTrafficRoads from '@/app/component/home/XL/xl-trafficRoads';
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
                <figure className='min-h-screen relative'>
                    <XlTodaysCoding/>
                    <div className='h-[400px]'/>
                    <XlTrafficRoads/>
                </figure>
                
            </section>
            
        </div>
    );
};

export default Home;