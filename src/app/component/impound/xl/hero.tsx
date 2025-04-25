import Image from 'next/image'
import React from 'react'
import Img1 from '../../../../../public/assets/images/Rectangle 47.png'
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  return (
    <div className='h-[70%] select-none'>
        <main className='h-[70%] w-full flex'>
            <section className='w-[50%] flex items-center justify-center'>
                <p className='p-20 font-poppins text-white'>All vehicles that has been towed are placed in our impounding are in
                Tumana Marikina City, Each day the MMDA conducted intensified road-clearing operations citing and towing approximately 100 vehicles in a single day</p>
            </section>

            <section className='w-[50%]  flex items-center justify-center overflow-hidden'>
                <div className='h-[90%] max-h-[400px] w-[75%] relative'>
                    <Image src={Img1} alt=''draggable={false} fill className='object-cover rounded-[2.5rem]'/>
                </div>
            </section>
        </main>
        <footer className='h-[30%] flex justify-center items-center gap-2'>
            <CiLocationOn size={40}/>
            <h2 className='text-xl text-white font-protest-strike'>TUMANA MARIKINA CITY</h2>
        </footer>
    </div>
  )
}

export default Hero