import React from 'react';
import img1 from '../../../../../public/assets/images/mmda-background.png'
import Image from 'next/image';
import img2 from '../../../../../public/assets/images/qr-code.png'
import Condition from './condition';

const Background = () => {

  return (
    <div
        className='absolute top-0 bg-[teal] w-full h-full'
    >   
        <Image src={img1} alt='' className='h-[90%] w-full object-cover'/>
        <section className='absolute top-0 mt-[90px] w-full flex flex-col items-center justify-center'>
            <h2 
                className='font-koulen text-[#dfdfdf] flex flex-col items-center justify-center text-[39px]'
                style={{WebkitTextStroke:"2px #606060", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}
            >METRO MANILA</h2>
            <h2 
                className='font-koulen text-[#dfdfdf] text-[39px] text-center'
                style={{WebkitTextStroke:"2px #606060", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}
            >DEVELOPMENT AUTHORITY</h2>
           
        </section>
        <Condition/>
        <section className='absolute top-[40%] h-[calc(100dvh-40%)] bg-[#94A6FF] w-full flex items-center'>
            <div className='flex items-center ml-4'>
                <Image src={img2} alt='' height={120} width={120}/>
                <div className='ml-2'>
                    <h1 className='text-5xl font-kumar-One'>R</h1>
                    <p className='text-sm'>download <br/> through our <br/> application</p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Background;