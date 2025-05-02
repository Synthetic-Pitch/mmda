'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import {setTodaysCoding,setTrafficRoads} from '@/app/redux/home';
import Link from 'next/link';

const XlNavigation = () => {
    const dispatch = useDispatch();
    
    return (
        <div className='bg-[#94A6FF] h-[20%]'>
            <main className='flex justify-evenly items-center h-full w-full max-w-[2000px]'>
                <Link href="/reclamation"
                    className='w-[23%] h-[70%] bg-[#CECECE] rounded-xl flex items-center justify-center cursor-pointer hover:border-2 hover:border-white hover:text-xl transition-all shadow-[4px_4px_4px_rgba(0,0,0,.5)] select-none'>
                    vehicle reclamation
                </Link>

                <section 
                    onClick={()=>dispatch(setTodaysCoding(true))}
                    className='w-[23%] h-[70%] bg-[#CECECE] rounded-xl flex items-center  justify-center cursor-pointer hover:border-2 hover:border-white hover:text-xl transition-all shadow-[4px_4px_4px_rgba(0,0,0,.5)] select-none'>
                    todays coding
                </section>
                
                <section  
                    onClick={()=>dispatch(setTrafficRoads(true))}
                    className='w-[23%] h-[70%] bg-[#CECECE] rounded-xl flex items-center  justify-center cursor-pointer hover:border-2 hover:border-white hover:text-xl transition-all shadow-[4px_4px_4px_rgba(0,0,0,.5)] select-none'>
                    traffic  roads
                </section>
            </main>
            
        </div>
    );
};

export default XlNavigation;