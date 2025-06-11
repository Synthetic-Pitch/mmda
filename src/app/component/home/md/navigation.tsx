'use client'
import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import {setTodaysCoding,setTrafficRoads} from '@/app/redux/home';

const Navigation = () => {
const dispatch = useDispatch();
  return (
    <div className='h-[300px] bg-[#94A6FF] pt-24 flex justify-evenly'>
        <Link href="reclamation" className=' h-[140px] w-[200px] bg-[#D9D9D9] flex items-center justify-center rounded-xl shadow-[4px_4px_4px_rgba(0,0,0,.5)] cursor-pointer font-poppins'>reclamation</Link>
        <button 
          onClick={()=>dispatch(setTodaysCoding(true))} 
          className='h-[140px] w-[200px] bg-[#D9D9D9] rounded-xl shadow-[4px_4px_4px_rgba(0,0,0,.5)] cursor-pointer font-poppins'>today's coding</button>
        <button 
          onClick={()=>dispatch(setTrafficRoads(true))} 
          className='h-[140px] w-[200px] bg-[#D9D9D9] rounded-xl shadow-[4px_4px_4px_rgba(0,0,0,.5)] cursor-pointer font-poppins'>traffic roads</button>
    </div>
  );
};

export default Navigation;