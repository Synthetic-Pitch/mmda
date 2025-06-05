'use client'
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import {setTodaysCoding,setTrafficRoads} from '@/app/redux/home';

const Navigation = () => {
    const dispatch = useDispatch();
    
    return (
        <div className='h-[300px] w-full bg-[#94A6FF] pt-[50px] relative top-0 flex flex-col items-center justify-evenly '>
            <Link href="/reclamation" className='w-[80%] h-16 bg-[#D9D9D9] flex items-center justify-center rounded-2xl cursor-pointer text-center'>
                vehicle reclamation
            </Link>
            <button onClick={()=>dispatch(setTodaysCoding(true))} className='w-[80%] h-16 bg-[#D9D9D9] rounded-2xl cursor-pointer'>
                today's coding
            </button>
            <button onClick={()=>dispatch(setTrafficRoads(true))} className='w-[80%] h-16 bg-[#D9D9D9] rounded-2xl cursor-pointer'>
                traffic roads
            </button>
        </div>
    );
};

export default Navigation;