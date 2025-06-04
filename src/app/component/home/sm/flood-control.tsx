import Image from 'next/image';
import React from 'react';
import img1 from '../../../../../public/assets/images/floodcontrol1.png'
import img2 from '../../../../../public/assets/images/floodcontrol2.png'
import img3 from '../../../../../public/assets/images/floodcontrol3.png'
import { MdFlood } from "react-icons/md";

const FloodControl = () => {

  return (
    <div className='bg-[#D9D9D9]'>
        <h1 className='font-poppins font-extrabold text-2xl text-center py-6'>FLOOD CONTROL PROJECTS</h1>
        <p className='px-6 text-md pb-6'>​Protecting our communities from floods requires collective action. By investing in infrastructure, promoting sustainable practices, and raising awareness, we can build resilience and safeguard our future.</p>
        <section className='flex flex-col items-center justify-center gap-6'>
            <Image src={img2} alt='' width={360} height={280} className='object-cover' draggable={false}/>
            <Image src={img3} alt='' width={320} height={220} className='object-cover' draggable={false}/>
            <Image src={img1} alt='' width={360} height={280} className='object-cover' draggable={false}/>
        </section>
        <footer className='flex justify-center items-center mt-6'>
            <MdFlood size={30}/>
            <p>by maintaning sewage flow we prevent flood</p>
        </footer>
    </div>
  );
};

export default FloodControl;