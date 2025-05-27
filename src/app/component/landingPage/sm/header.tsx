import React from 'react';
import img from '../../../../../public/assets/icons/mmda-icon.png';
import Image from 'next/image';


const Header = () => {
  return (
    <div className='h-[80px] w-full flex items-center px-4 relative z-30'>
      <Image src={img} alt='' width={60} height={60}/>
    </div>
  );
};

export default Header;