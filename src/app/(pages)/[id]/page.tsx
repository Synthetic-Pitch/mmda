
import Header from '@/app/component/home/md/header';
import FloodControl from '@/app/component/home/sm/flood-control';
import Navigation from '@/app/component/home/sm/navigation';
import TodaysCoding from '@/app/component/home/sm/todays-coding';
import TrafficRoads from '@/app/component/home/sm/traffic-roads';
import XlFloodControl from '@/app/component/home/XL/xl-floodControl';
import XlHeader from '@/app/component/home/XL/xl-header';
import XlNavigation from '@/app/component/home/XL/xl-navigation';
import XlTodaysCoding from '@/app/component/home/XL/xl-todaysCoding';
import XlTrafficRoads from '@/app/component/home/XL/xl-trafficRoads';
import NavigationMD from '@/app/component/home/md/navigation'
import FloodControlMD from '@/app/component/home/md/flood-control'
import TodaysCodingMD from '@/app/component/home/md/todays-coding'
import TrafficRoads2 from '@/app/component/home/md/traffic-roads'
import React from 'react';
import MobileNav from '@/app/component/navbar/mobileNav';

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

            <section className='hidden sm:block lg:hidden relative'>
                <Header/>
                <NavigationMD/>
                <FloodControlMD/>
                <TodaysCodingMD/>
                <TrafficRoads2/>
            </section>

            <section className='sm:hidden'>
                <figure className='relative'>
                    <MobileNav/>
                    <Navigation/>
                    <FloodControl/>
                </figure>
                <figure>
                    <TodaysCoding/>
                    <TrafficRoads/>
                </figure>
            </section>
            
        </div>
    );
};

export default Home;