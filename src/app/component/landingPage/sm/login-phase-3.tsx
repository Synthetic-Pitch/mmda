import Image from 'next/image';
import React from 'react';
import img from '../../../../../public/assets/icons/search.png';
import img2 from '../../../../../public/assets/icons/github.png';
const LoginPhase3 = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <main className='w-[50%] h-[80%] flex items-center justify-evenly bg-[#E5E5E5] rounded-4xl'>
            <Image src={img} alt='' height={50} width={50}/>
            <Image src={img2} alt='' height={50} width={50}/>
        </main>
    </div>
  );
};

export default LoginPhase3;