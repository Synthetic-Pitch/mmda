import React from 'react';
import { GiTowTruck } from "react-icons/gi";
import img1 from '../../../../../public/assets/images/Rectangle 47.png'
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import img2 from '../../../../../public/assets/images/Rectangle 48.png'
import img3 from '../../../../../public/assets/images/Rectangle 49.png'

const SmBody = () => {
  return (
    <div className='bg-[#8B8787] min-h-screen pt-16'>
        <header className='flex items-center justify-center gap-[3%]'>
            <GiTowTruck size={50}/>
            <h1 className='font-lakki text-center -mb-6 text-3xl'>IMPOUND AREA</h1>
        </header>
        <div className='flex justify-center items-center py-6'>
            <Image src={img1} alt='' height={300} width={360}/>
        </div>
        <p className='px-6 text-center text-white'>
            All vehicles that has been towed are placed in our impounding are in
            Tumana Marikina City, Each day the MMDA conducted intensified road-clearing operations citing and towing approximately 100 vehicles in a single day
        </p>
        <p className='px-6 pt-6 text-center text-white'>base on the statistic of year 2024</p>

        <section className='py-12 flex justify-center items-center gap-3'>
            <CiLocationOn size={30}/>
            <h1 className='text-xl font-protest-strike text-[#cecece]'>TUMANA MARIKINA CITY</h1>
        </section>
        <section className='flex flex-col items-center relative gap-4'>
            <Image src={img2} alt='' height={280} width={320} className='z-20'/>
            <div className='absolute top-[30%] bg-[#545454] h-[calc(100%-20%)] w-full'/>
            <Image src={img3} alt='' height={280} width={320} className='z-20'/>
        </section>
    </div>
  );
};

export default SmBody;