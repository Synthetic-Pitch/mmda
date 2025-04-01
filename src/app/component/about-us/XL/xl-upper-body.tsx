'use client'
import React from 'react';
import Image from 'next/image';
import Img1 from '../../../../../public/assets/images/mmda-oagmo-a.png'
import Img2 from '../../../../../public/assets/images/Rectangle 20.png'
import Img3 from '../../../../../public/assets/images/Rectangle 19.png'


const XlUpperBody = () => {
    return (
        <div 
            className='h-[calc(100vh-76px)] w-full bg-[#94A6FF] grid grid-cols-4 grid-rows-3 relative'
            style={{gridTemplateRows:'15% 55% 20%'}}
            >
            <header className='row-span-1 col-span-4 flex justify-center items-center '><span className='font-lakki text-7xl mt-12'>ABOUT US</span></header>
            <section 
                className='flex justify-center items-center relative bg-[red]' style={{gridColumn:'1/3',gridRow:'2/3'}}>
                    
                <main className='relative w-[70%] h-[90%] bg-[orange] ml-[10rem]'>
                    
                    <Image src={Img1} alt='' fill draggable={false} objectFit='cover'/>
                    <Image src={Img2} alt='' draggable={false} objectFit='cover'
                        className='absolute -top-15 -left-25'
                    />
                </main>
            </section>

            <section 
                className='flex justify-center items-center font-poppins text-white text-xl' 
                style={{gridColumn:'3/4',gridRow:'2/3',width:'120%',lineHeight:'2rem'}}>
                <h2>
                    The Metropolitan Manila Development Authority (MMDA) is responsible for managing traffic regulations, public safety, and urban planning in Metro Manila. Our goal is to ensure smooth traffic flow and enforce road safety rules.
                </h2>
            </section>
            <section 
                className='bg-[orange] absolute h-full w-full' 
                style={{gridColumn:'4/5',gridRow:'1/2'}}>
                <Image src={Img3} alt=""  height={150} width={150}/>
            </section>
        </div>
    );
};

export default XlUpperBody;