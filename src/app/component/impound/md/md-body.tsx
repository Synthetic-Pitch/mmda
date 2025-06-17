import Image from 'next/image';
import React from 'react';
import img1 from '../../../../../public/assets/images/Rectangle 47.png'
import { CiLocationOn } from "react-icons/ci";
import img2 from '../../../../../public/assets/images/Rectangle 48.png'

const MdBody = () => {
  return (
    <div className='bg-[#8B8787] pt-16'>
        <h1 className='font-lakki text-5xl text-center py-4'>IMPOUNDING AREA</h1>
        <section className='flex py-8'>
            <p className='w-1/2 px-12 text-white py-2 flex items-center'>
                All vehicles that has been towed are placed in our impounding are in
                Tumana Marikina City, Each day the MMDA conducted intensified road-clearing operations citing and towing approximately 100 vehicles in a single day
            </p>
            <Image draggable={false} src={img1} alt='' width={300} height={300} className='rounded-2xl' style={{ boxShadow: '0px 0px 22px 9px #595656' }}/>
        </section>
        <p className='text-center text-white py-8'>base on the statistic of year 2024</p>
        <section className='flex items-center justify-center gap-4 py-12'>
            <CiLocationOn size={30}/>
            <h1 className='text-white font-protest-strike text-center text-2xl'>TUMANA MARIKINA CITY</h1>
        </section>
        <section className='relative h-[500px]'>
            <div className='bg-[#8B8787] h-[40%] w-full'/>
            <div className='bg-[#6D6D6D] h-[60%] w-full'/>
            <Image src={img2} alt='' width={500} height={500} 
                className='absolute pt-8 top-20 pl-8'/>
        </section>
        <section className='relative h-[400px] bg-[#6D6D6D] flex justify-end px-8 pb-12'>
            <Image src={img1} alt='' width={500} height={500} 
               />
        </section>
    </div>
  );
};

export default MdBody;