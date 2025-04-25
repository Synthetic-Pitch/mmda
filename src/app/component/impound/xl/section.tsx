'use client'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Img1 from '../../../../../public/assets/images/Rectangle 48.png'
import Img2 from '../../../../../public/assets/images/Rectangle 49.png'
const Section = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [percentage, setPercentage] = useState(100);
  const { scrollYProgress } = useScroll({ target: ref });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useMotionValueEvent(scrollYProgress, 'change', () => {
    const fixedVal = Math.round(progress.get());
    setCount(fixedVal);
  });

  useEffect(() => {
    if (count < 40) {
      setPercentage(100);
    } else if (count > 70) {
      setPercentage(0);
    } else {
      const ratio = (count - 40) / (70 - 40);
      setPercentage(100 - ratio * 100);
    }

  }, [count]);  
  
  return (
    <div ref={ref} className=' w-full h-[400vh] relative'>
      <section 
        className='bg-[#6D6D6D] h-screen  w-full sticky top-0 z-20 flex items-center justify-center'
        style={{
          opacity:percentage /100,
        }}
      >
        <div 
          className=' bg-[#989898] absolute inset-0 z-10'
          style={{clipPath:'polygon(100% 0, 0% 100%, 100% 100%)'}}
        />
        <figure
          className='relative h-full w-full max-w-[1500px] flex items-center'
        >
          <Image src={Img1} alt='' width={700} height={600} className='relative z-20'/>
        </figure>
      </section>
      
      <section className='sticky top-0 h-screen w-full bg-[#8B8787] z-0 flex items-center justify-center'>
        <div 
          className='absolute inset-0 z-10 bg-[#6D6D6D]' 
          style={{clipPath:'polygon(0 0, 100% 0, 100% 100%)'}}
        />
        <figure
          className='relative w-full max-w-[1500px] flex justify-end'
        >
          <Image src={Img2} alt='' width={700} height={600} className='relative z-20'/>
        </figure>
      </section>
    </div>
  );
}

export default Section;
