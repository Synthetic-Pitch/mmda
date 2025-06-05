import Image from 'next/image';
import React from 'react';
import img1 from '../../../../../public/assets/images/floodcontrol1.png'
import img2 from '../../../../../public/assets/images/floodcontrol2.png'
import img3 from '../../../../../public/assets/images/floodcontrol3.png'
import { MdFlood } from "react-icons/md";
const FloodControl = () => {
  return (
    <div className='bg-[#D0D8FF]'>
        <h2 className='flex items-center justify-center h-20 text-5xl font-poppins font-extrabold tracking-wider'>
            Flood Control Projects
        </h2>
        <section className='flex items-center justify-evenly'>
            <Image src={img2} alt='' height={200} width={300} className='object-cover' draggable={false}/>
            <Image src={img3} alt='' height={200} width={300} className='object-cover' draggable={false}/>
        </section>
       <figure className='flex justify-center pt-9 pb-8'>
            <Image src={img1} alt='' height={200} width={300} className='object-cover' draggable={false}/>
       </figure>
        <p className='px-12 font-poppins text-xl'>
            ​Protecting our communities from floods requires collective action. By investing in infrastructure, promoting sustainable practices, and raising awareness, we can build resilience and safeguard our future.
        </p>
        <div className='flex gap-4 justify-center items-center pt-8'>
            <MdFlood size={34}/>
            <p className='font-poorStory text-2xl'>by maintaning sewage flow we prevent flood</p>
        </div>
    </div>
  );
};

export default FloodControl;