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

  useEffect(()=>{
      const observer = new IntersectionObserver(
          ([entry]) => {
              setIsInView(entry.isIntersecting);
          },
          { threshold: 0.5 } // Adjust threshold as needed
      );
      if (ref.current) {
          observer.observe(ref.current);
      }

      return () => {
          if (ref.current) {
              observer.unobserve(ref.current);
          }
      };
  },[]);

  useEffect(() => {
      if(!isInView){
          dispatch(setTodaysCoding(false));
      }
  }, [isInView]);

    return (
        <div className='bg-[#D0D8FF] pt-12' ref={ref}>
            <h1 className='font-poppins text-3xl font-bold text-center text-[#94A6FF]'>TODAY’S CODING</h1>
            <section className='h-[180px] flex justify-start items-center px-16 mt-6 pb-8'>
                <figure className='h-full w-[180px] bg-[#9F9F9F] flex flex-col items-center justify-center gap-2 rounded-3xl'>
                    <h2 className='font-poppins font-bold text-[#D0D8FF] text-2xl'>{date}</h2>
                    <h1 className='font-extrabold text-4xl text-white'> {code}</h1>
                </figure>
            </section>
            <main className='bg-[#D9D9D9] h-[500px] w-[80%] m-auto flex flex-col justify-evenly'>
                <aside className='flex justify-evenly'>
                    <div className='h-[200px] w-[200px] flex flex-col items-center justify-center gap-3'>
                        <h2 className='text-4xl text-[#8BA57B] font-bold'>monday</h2>
                        <h1 className='text-5xl font-bold'>1-2</h1>
                    </div>
                    <div className='h-[200px] w-[200px] flex flex-col items-center justify-center gap-3'>
                        <h2 className='text-4xl text-[#8BA57B] font-bold'>tuesday</h2>
                        <h1 className='text-5xl font-bold'>3-4</h1>
                    </div>
                    <div className='h-[200px] w-[200px] flex flex-col items-center justify-center gap-3'>
                        <h2 className='text-4xl text-[#8BA57B] font-bold'>wendnesday</h2>
                        <h1 className='text-5xl font-bold'>5-6</h1>
                    </div>
                </aside>
                <aside className='flex justify-evenly'>
                    <div className='h-[200px] w-[200px] flex flex-col items-center justify-center gap-3'>
                        <h2 className='text-4xl text-[#8BA57B] font-bold'>thursday</h2>
                        <h1 className='text-5xl font-bold'>7-8</h1>
                    </div>
                    <div className='h-[200px] w-[200px] flex flex-col items-center justify-center gap-3'>
                        <h2 className='text-4xl text-[#8BA57B] font-bold'>wendnesday</h2>
                        <h1 className='text-5xl font-bold'>9-0</h1>
                    </div>
                </aside>
            </main>
            <section className='py-10'>
                <h1 className='text-6xl font-markdown text-[#8BA57B] text-center font-bold tracking-wider'>MAJOR ROADS</h1>
                <ul className='grid grid-cols-3 justify-center gap-4 text-center py-8 px-4 font-poppins'>
                    <li>EDSA</li>
                    <li>Aurora Boulevard</li>
                    <li>Quirino Avenue</li>
                    <li>C5</li>
                    <li>Marcos Highway​</li>
                    <li>Recto Avenue​</li>
                    <li>Roxas Boulevard​</li>
                    <li>Araneta Avenue​</li>
                    <li>Magsaysay Boulevard​</li>
                    <li>Quezon Avenue</li>
                    <li>Bonifacio Avenue</li>
                    <li>Del Pan</li>
                    <li>Ortigas Avenue</li>
                    <li>Rizal Avenue</li>
                    <li>South Luzon Expressway (SLEX)​</li>
                    <li>Shaw Boulevard</li>
                    <li>Taft Avenue</li>
                </ul>
            </section>
             <section className='h-[300px] bg-[#A09C9C]'>
                        <ul className='grid grid-cols-2 py-8 h-full w-full font-bold text-xl text-center font-port-lligat-slab'>
                            <li>Makati</li>
                            <li>PARANAQUE</li>
                            <li>MANILA - most road</li>
                            <li>PASAY</li>
                            <li>QUEZON</li>
                            <li>TAGUIG</li>
                            <li>PASIG</li>
                            <li>VALENZUELA</li>
                            <li>MANDALUYONG</li>
                        </ul>
            </section>
            <section>

            </section>
        </div>
    );
};

export default TodaysCoding;