'use client';

import { Card, CardContent } from '@/components/ui/card';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion} from 'framer-motion';
import {setTodaysCoding} from '@/app/redux/home';


type State = {
    homeSlice:{
        todaysCoding : boolean
    }
}

const XlTodaysCoding = () => {
    const todayCoding = useSelector((state:State)=>state.homeSlice.todaysCoding);
    const [date,setDate] = useState<string>();
    const [day,setDay] = useState<string>();
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Manila' })
        
        switch(today){
            case 'Monday':
                setDate('Monday');
                setDay('1 - 2');
                break;
            case 'Tuesday':
                setDate('Tuesday');
                setDay('3 - 4');
                break;
            case 'Wednesday':
                setDate('Wednesday');
                setDay('5 - 6');
                break;
            case 'Thursday':
                setDate('Thursday');
                setDay('7 - 8');
                break;
            case 'Friday':
                setDate('Friday');
                setDay('9 - 10');
                break;
            default:
                setDate('Weekend');
                setDay('no coding');
        }
    },[]);
    
    const Coding = [
        {
            date:'mon',
            day:'1 - 2'
        },
        {
            date:'tue',
            day:'3 - 4'
        },
        {
            date:'wed',
            day:'5 - 6'
        },
        {
            date:'thu',
            day:'7 - 8'
        },
        {
            date:'fri',
            day:'9 - 0'
        }
    ]

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
        <div ref={ref}
            className='bg-[#D0D8FF] min-h-screen w-full flex justify-center sticky top-0 '>
            <main className='min-h-screen w-full max-w-[2000px] flex flex-col'>
                <header>
                    <h2 className='text-center font-poppins text-3xl font-extrabold text-[#94A6FF] py-10 select-none'>
                        TODAY&apos;S CODING
                    </h2>
                </header>
                
                <motion.div>
                    <Card
                        
                        className='w-[260px] h-[140px] ml-20 bg-[#9F9F9F] border-none flex justify-center items-center select-none'
                    >
                        <CardContent
                            className='flex justify-center text-3xl font-poppins font-bold text-white'
                        >
                            {date}
                        </CardContent>
                        <CardContent
                            className='flex justify-center text-5xl font-extrabold text-white'
                        >
                            {day}
                        </CardContent>
                    </Card>
                </motion.div>
                
                <section className='flex justify-evenly h-[170px] py-4 select-none'>
                    {   
                        Coding.map((item,index)=>(
                            <Card key={index}
                                className='bg-[#E4E3E3] w-[18%] flex justify-center items-center border-none'
                            >
                                <CardContent className='text-[#8BA57B] font-poppins text-4xl font-extrabold'>
                                    {item.date}
                                </CardContent>
                                <CardContent className='text-[#717171] font-poppins text-3xl font-bold'>
                                    {item.day}
                                </CardContent>
                            </Card>
                        ))
                    }
                </section>
                
                <footer className='flex-grow flex max-h-full overflow-hidden'>
                    <section className='w-[60%]  h-full flex justify-center items-center'>
                        <table className='w-[70%] h-[80%] font-poppins font-light select-none'>
                            <thead>
                                <tr className='text-center'>
                                    <th className='w-full text-7xl font-markdown font-extrabold text-[#8BA57B]' colSpan={3}>MAJOR ROADS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='w-[30%] poppins'>EDSA</td>
                                    <td className='w-[30%] poppins'> Aurora Boulevard</td>
                                    <td className='w-[30%] poppins'>Marcos Highway</td>
                                </tr>
                                <tr>
                                    <td className='w-[30%] poppins'>C5</td>
                                    <td className='w-[30%] poppins'>Marcos Highway</td>
                                    <td className='w-[30%] poppins'>Recto Avenue</td>
                                </tr>
                                <tr>
                                    <td className='w-[30%] poppins'>Roxas Boulevard</td>
                                    <td className='w-[30%] poppins'>Araneta Avenue</td>
                                    <td className='w-[30%] poppins'>Magsaysay Boulevard</td>
                                </tr>
                                <tr>
                                    <td className='w-[30%] poppins'>Quezon Avenue</td>
                                    <td className='w-[30%] poppins'>Bonifacio Avenue</td>
                                    <td className='w-[30%] poppins'>Del Pan</td>
                                </tr>
                                <tr>
                                    <td className='w-[30%] poppins'>Ortigas Avenue</td>
                                    <td className='w-[30%] poppins'>Rizal Avenue</td>
                                    <td className='w-[30%] poppins'>South Luzon Expressway</td>
                                </tr>
                                <tr>
                                    <td className='w-[30%] poppins'>Shaw Boulevard</td>
                                    <td className='w-[30%] poppins'>Taft Avenue</td>
                                    <td className='w-[30%] poppins'>(SLEX)</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className='w-[40%] mt-[2rem] bg-[#A09C9C] pl-8 flex items-stretch'>
                        <table className='text-md h-full text-[#E6E6E6] font-port-lligat-slab select-none'>
                            <tbody>
                                <tr>
                                    <td>
                                        Makati
                                    </td>
                                </tr>
                                <tr>
                                    <td>MANILA -most road</td>
                                </tr>
                                <tr>
                                    <td>
                                        QUEZON
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    PASIG
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    MANDALUYONG
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    PARANAQUE
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    PASAY
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    TAGUIG
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    VALENZUELA
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </section>
                </footer>
            </main>
        </div>
    );
};

export default XlTodaysCoding;