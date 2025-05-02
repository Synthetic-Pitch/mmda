import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
const Phase2 = () => {
  return (
    <div className='h-full w-[40%] bg-[#5B5B5B] pt-[10vh] flex flex-col justify-center px-[4vw] gap-[2vh]'>
      
      <section className='flex items-center gap-[2vw] text-white'>
        <FaLocationDot color='white' className='text-[4vh]'/>
        <h2 className='text-[4vh] font-poppins select-none'>MARIKINA CITY</h2>
      </section>
      <section className='text-[1.5vw] font-jura text-white'>
        genuinepower123@gmail.com
      </section>
      <section className='text-[1.5vw] font-jura text-white'>
        Reymark P Dequito
      </section>
    </div>
  )
}

export default Phase2