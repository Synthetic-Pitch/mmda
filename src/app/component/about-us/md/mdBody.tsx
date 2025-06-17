import React from 'react';
import img1 from '../../../../../public/assets/images/mmda-oagmo-a.png';
import Img2 from "../../../../../public/assets/images/Rectangle 20.png";

import Image from 'next/image';

const MdBody = () => {
  return (
    <div className='relative bg-[#94A6FF] min-h-[100dvh] pt-16'>
        <h1 className='font-lakki text-5xl flex items-center justify-center py-8'>ABOUT US</h1>
        <main className='flex justify-center'>
            <section className='w-1/2 flex justify-end'>
                <div className='relative'>
                    <Image src={Img2} alt='' width={90} height={90} objectFit='cover' className='absolute bottom-[70%] right-[85%]'/>
                    <Image src={img1} alt='' width={320} height={300} objectFit='cover'/>
                </div>
            </section>
            <section className='w-1/2 flex items-center px-8 text-white'>
                <p>The Metropolitan Manila Development Authority (MMDA) is responsible for managing traffic regulations, public safety, and urban planning in Metro Manila. Our goal is to ensure smooth traffic flow and enforce road safety rules.</p>
            </section>
        </main>
        <footer className='py-8'>
            <section className='w-[500px] bg-[#E8E8E8] m-auto px-8'>
                <h1 className='font-jura text-center text-2xl py-8 font-bold'>MISSION</h1>
                <p className='w-[70%] font-mono'>As a global-oriented metropolis, Metropolitan Manila will evolve into a major business and transaction center in the Asia-Pacific region.</p>
                <p className='pl-16 font-mono pt-8 pb-8'>As a center of a growth polygon for Luzon Island, Metropolitan Manila will influence the creation of socio-economic opportunities in the areas beyond its political and administrative boundaries.</p>
            </section>
            <section className='bg-[#969696] mt-12 w-[60%] m-auto px-8 text-white'>
                <h1 className='font-jura text-center text-2xl py-8 font-bold'>VISION</h1>
                <p className='font-mono pb-8'>Towards a humane, world-class metropolis with a livable and workable physical environment for all.</p>
            </section>
        </footer>
    </div>
  );
};

export default MdBody;