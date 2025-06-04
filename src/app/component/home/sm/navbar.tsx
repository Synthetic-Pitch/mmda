
import React from 'react';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className='h-16 w-full absolute flex items-center justify-end px-2 z-20'>
      <TiThMenu size={42}/>

      {/* <div className='absolute top-3 right-2 bg-[#5B5B5B] text-white p-6 rounded-2xl'>
        <ul className='flex flex-col gap-1'>
          <Link href="/impound-info">
            impound-info
          </Link>
          <Link href="faqs">
            faqs
          </Link>
          <Link href="contact-us">
            contact-us
          </Link>
          <Link href="about-us">
            about-us
          </Link>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;