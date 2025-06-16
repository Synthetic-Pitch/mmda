'use client'
import UseDateHook from '@/app/hooks/dateHook';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setTodaysCoding} from '@/app/redux/home';

type State = {
    homeSlice:{
        todaysCoding : boolean
    }
}

const TodaysCoding = () => {
  const {date,code}  = UseDateHook();
  const [isInView, setIsInView] = useState(false);
  const todayCoding = useSelector((state:State)=>state.homeSlice.todaysCoding);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  // This initiate when User click to scroll here;
  
  useEffect(()=>{
      if(todayCoding){
          ref.current?.scrollIntoView({behavior:'smooth'})
      }
  },[todayCoding]);

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              setIsInView(entry.isIntersecting);
          },
          {
              threshold: 0.1, // Less strict: only 10% needs to be visible to count as in view
          }
      );

      const currentRef = ref.current;

      if (currentRef) {
          observer.observe(currentRef);
      }

      return () => {
          if (currentRef) {
              observer.unobserve(currentRef);
          }
      };
  }, []);

  useEffect(() => {
      if(!isInView){
          dispatch(setTodaysCoding(false));
      }
  }, [isInView]);

  return (
    <div ref={ref} className=' bg-[#D0D8FF]'>
        <h1 className='text-center text-[#94A6FF] font-extrabold text-xl py-8'>TODAYS CODING</h1>
        <section className='h-[100px] flex justify-start items-center px-4'>
          <figure className='h-full w-[120px] bg-[#9F9F9F] flex flex-col items-center justify-center gap-2 rounded-xl'>
            <h2 className='font-poppins font-bold text-[#D0D8FF]'>{date}</h2>
            <h1 className='font-extrabold text-xl text-white'> {code}</h1>
          </figure>
        </section>
        <section className=' w-full h-[300px] mt-6 flex justify-center select-none'>
          <ul className='bg-[#DFDFDF] w-[90%] h-[300px] flex flex-col justify-between p-6'>
            <div className='flex px-4'>
              <li className='w-1/2'>Monday</li>
              <li className='w-1/2'>1-2</li>
            </div>
            <hr  className='bg-black p-0 m-0 w-full h-[2px]'/>
            <div className='flex px-4'>
              <li className='w-1/2'>Tuesday</li>
              <li className='w-1/2'>3-4</li>
            </div>
            <hr  className='bg-black p-0 m-0 w-full h-[2px]'/>
            <div className='flex px-4'>
              <li className='w-1/2'>Wendnesday</li>
              <li className='w-1/2'>5-6</li>
            </div>
            <hr  className='bg-black p-0 m-0 w-full h-[2px]'/>
            <div className='flex px-4'>
              <li className='w-1/2'>Thursday</li>
              <li className='w-1/2'>7-8</li>
            </div>
            <hr  className='bg-black p-0 m-0 w-full h-[2px]'/>
            <div className='flex px-4'>
              <li className='w-1/2'>Friday</li>
              <li className='w-1/2'>9-0</li>
            </div>
          </ul>
        </section>
        <h1 className=' text-center font-extrabold text-5xl font-markdown text-[#8BA57B] h-16 flex items-center justify-center select-none mb-2'>MAJOR ROADS</h1>
        <ul className='grid grid-cols-2 px-6 gap-2 select-none'>
          <li>EDSA</li>
          <li>Aurora Boulevard</li>
          <li>C5</li>
          <li>Marcos Highway</li>
          <li>Roxas Boulevard​</li>
          <li>Araneta Avenue</li>
          <li>Quezon Avenue</li>
          <li>Bonifacio Avenue</li>
          <li>Ortigas Avenue</li>
          <li>Rizal Avenue</li>
          <li>Shaw Boulevard</li>
          <li>Taft Avenue</li>
          <li>Quirino Avenue</li>
          <li>Recto Avenue</li>
          <li>Magsaysay Boulevard​</li>
          <li>Del Pan</li>
          <li>South Luzon Expressway</li>
          <li>(SLEX)​</li>
        </ul>
        <footer className='bg-[#A09C9C] w-full p-6 mt-8'>
          <ul className='flex flex-col gap-2 text-white'>
            <li>Makati</li>
            <li>MANILA - most road</li>
            <li>QUEZON</li>
            <li>PASIG</li>
            <li>MANDALUYONG</li>
            <li>PARANAQUE</li>
            <li>PASAY</li>
            <li>TAGUIG</li>
            <li>VALENZUELA</li>
          </ul>
        </footer>
    </div>
  );
};

export default TodaysCoding;