'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import {setTodaysCoding} from '@/app/redux/home';

const XlNavigation = () => {
    const dispatch = useDispatch();
 

    return (
        <div className='bg-[#94A6FF] w-full h-[200px] flex justify-center'>
            <main className='flex justify-evenly items-center h-full w-full max-w-[2000px]'>
                <section 
                    className='w-[23%] h-[70%] bg-[#CECECE] rounded-xl flex items-center justify-center cursor-pointer hover:border-2 hover:border-white hover:text-xl transition-all shadow-[4px_4px_4px_rgba(0,0,0,.5)] select-none'>
                    vehicle reclamation
                </section>

                <section 
                    onClick={()=>dispatch(setTodaysCoding(true))}
                    className='w-[23%] h-[70%] bg-[#CECECE] rounded-xl flex items-center  justify-center cursor-pointer hover:border-2 hover:border-white hover:text-xl transition-all shadow-[4px_4px_4px_rgba(0,0,0,.5)] select-none'>
                    todays coding
                </section>
                
                <section  
                    className='w-[23%] h-[70%] bg-[#CECECE] rounded-xl flex items-center  justify-center cursor-pointer hover:border-2 hover:border-white hover:text-xl transition-all shadow-[4px_4px_4px_rgba(0,0,0,.5)] select-none'>
                    traffic  roads
                </section>
            </main>
            
        </div>
    );
};

export default XlNavigation;