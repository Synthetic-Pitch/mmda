import Image from 'next/image';
import React from 'react';
import img1 from '../../../../../public/assets/images/mmda-oagmo-a.png';


const SmBody = () => {
  return (
    <div className='relative'>
        <div 
            className='absolute top-0 h-[100dvh] w-full bg-[#94A6FF]'
        >
            <div 
                style={{clipPath:"polygon(0 30%, 34% 45%, 70% 41%, 100% 74%, 100% 100%, 0 100%)"}} className='h-full w-full bg-[#BDBDBD] absolute top-0'/>
        </div>
        
        <section className='relative z-10'>
            <h1 className='font-lakki pt-16 flex items-center justify-center text-4xl -mb-4'>ABOUT-US</h1>
            <div className='flex items-center justify-center pt-8'>
                <Image src={img1} alt='' className='max-w-[90%] h-[280px] object-cover rounded-br-4xl'/>
            </div>
            <p className='pt-8 px-8 font-mono'>
                The Metropolitan Manila Development Authority (MMDA) is responsible for managing traffic regulations, public safety, and urban planning in Metro Manila. Our goal is to ensure smooth traffic flow and enforce road safety rules.
            </p>
        </section>
        <footer className='absolute z-10 w-full pt-8 flex flex-col items-center gap-8 bg-[#BDBDBD] pb-8'>
            <figure className='w-[90%] bg-[#E8E8E8] relative px-2 py-8'>
                <h1 className='font-jura text-2xl text-center py-2'>MISSION</h1>
                <p className='px-4 text-sm font-jura'>As a global-oriented metropolis, Metropolitan Manila will evolve into a major business and transaction center in the Asia-Pacific region.</p>
                <p className='font-jura text-sm px-4 pt-6'>As a center of a growth polygon for Luzon Island, Metropolitan Manila will influence the creation of socio-economic opportunities in the areas beyond its political and administrative boundaries.</p>
            </figure>
            <figure className='w-[90%] bg-[#969696] relative px-2 py-8'>
                <h1 className='font-jura text-white font-bold text-center text-xl'>VISION</h1>
                <p className='py-2  font-jura px-4 text-sm'>Towards a humane, world-class metropolis with a livable and workable physical environment for all.</p>
            </figure>
        </footer>
    </div>
  );
};

export default SmBody;