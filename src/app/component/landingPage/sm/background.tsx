import React from 'react';
import img1 from '../../../../../public/assets/images/mmda-background.png'
import Image from 'next/image';
import img2 from '../../../../../public/assets/images/qr-code.png'
import Condition from './condition';

const Background = () => {

  return (
    <div
        className='absolute top-0 w-full h-full overflow-hidden'
    >   
        <Image src={img1} alt='' className='h-[90%] w-full object-cover' priority/>
        <section className='absolute top-0 mt-[60px] w-full flex flex-col items-center justify-center z-50 '>
            <h2 
                className='font-koulen text-[#dfdfdf] flex flex-col items-center justify-center text-[39px] h-10'
                style={{WebkitTextStroke:"2px #606060", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}
            >METRO MANILA</h2>
            <h2 
                className='font-koulen text-[#dfdfdf] text-[39px] text-center h-10'
                style={{WebkitTextStroke:"2px #606060", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}
            >DEVELOPMENT AUTHORITY</h2>
            <Condition/>
        </section>
        
        <section className='absolute top-[40%] h-[calc(100dvh-40%)] bg-[#94A6FF] w-full flex flex-col justify-end'>
            <div className='flex items-center mb-[10%]'>
                <Image src={img2} alt='' height={120} width={120} className='relative z-20'/>
                <div className='ml-2 relative z-20'>
                    <h1 className='text-5xl font-kumar-One'>R</h1>
                    <p className='text-sm'>download <br/> through our <br/> application</p>
                </div>
                <div className='h-[200px] w-[200px] bg-[rgb(217,217,217,.3)] absolute ml-[4rem] rounded-2xl'/>
                <div className='h-[300px] w-[300px] bg-[rgb(217,217,217,.2)] absolute -ml-2 rounded-2xl'/>
            </div>
        </section>
    </div>
  );
};

export default Background;