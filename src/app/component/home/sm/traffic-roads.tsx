'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FaCarAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {setTrafficRoads} from '@/app/redux/home'
type State = {
    homeSlice:{
        trafficRoads:boolean
    }
}

const TrafficRoads = () => {

    const trafficRoads = useSelector((state:State)=>state.homeSlice.trafficRoads);
    const ref = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch();
    const [isInView, setIsInView] = useState(false);

    useEffect(()=>{
        if(!ref)return;

        if(trafficRoads){
            ref.current?.scrollIntoView({behavior:'smooth'})
        }
    },[trafficRoads])

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
            dispatch(setTrafficRoads(false));
        }
    }, [isInView]);

  return (
    <div className='bg-[#EBEBEB]' ref={ref}>
       <figure className='flex justify-center items-center py-5'>
            <FaCarAlt size={32}/>
            <h1 className='text-xl font-bold font-'>TRAFFIC ROADS TO AVOID</h1>
       </figure>
       <section>
            <div className='flex items-center gap-2 py-2 px-6'>
                <FaCircle color='#037D28'/>
                <h1 className='text-2xl font-bold text-[#3B786C]'>light traffic </h1>
            </div>
            <ul className='px-12 text-md flex flex-col gap-[2px]'>
                <li>Magsaysay Boulevard</li>
                <li>Ortigas Avenue</li>
                <li>Ayala Avenue</li>
                <li>Commonwealth Avenue</li>
                <li>General Luis Street</li>
            </ul>
            <div className='flex items-center gap-2 py-2 px-6'>
                <FaCircle color='#CF6F34'/>
                <h1 className='text-2xl font-bold text-[#78633B]'>heavy traffic</h1>
            </div>
            <ul className='px-12 text-md flex flex-col gap-[2px]'>
                <li>Quezon Avenue</li>
                <li>Roxas Boulevard</li>
                <li>Taft Avenue</li>
                <li>Quirino Avenue</li>
                <li>Epifanio de los Santos Avenue (EDSA)</li>
                <li>Circumferential Road 5 (C-5 Road)</li>
            </ul>
            <div className='flex items-center gap-2 py-2 px-6'>
                <FaCircle color='#BA492C'/>
                <h1 className='text-2xl font-bold text-[#D62727]'>intense traffic</h1>
            </div>
            <ul className='px-12 text-md flex flex-col gap-[2px] pb-4'>
                <li>España Boulevard</li>
                <li>Katipunan Avenue</li>
                <li>Gil Puyat Avenue (Buendia)</li>
                <li>Recto Avenue</li>
                <li>Araneta Avenue</li>
            </ul>
       </section>
    </div>
  );
};

export default TrafficRoads;