'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import {AnimatePresence, motion} from 'framer-motion';


const Navbar = () => {
  const [isOpen,setClose] = useState<boolean>(false);

  return (
    <div className='h-16 w-full absolute flex items-center justify-end px-2 z-20'>
      <TiThMenu size={42} onClick={()=>setClose(!isOpen)}/>
      <AnimatePresence mode='popLayout'>
        {
          isOpen && 
          <motion.div
            animate={{y:0}}
            initial={{y:-20}}
            exit={{y:-40,opacity:0}}
            className='absolute top-3 left-2 bg-[#5B5B5B] text-white p-6 rounded-2xl select-none'>
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
          </motion.div>
        }
      </AnimatePresence>
      
      
    </div>
  );
};

export default Navbar;