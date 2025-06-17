'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const TabletNav = () => {
    const pathname = usePathname();
    const [index,setIndex] = useState(0);
   const Routing = [
      ["about-us", "impound-info","contact-us","faqs"],
      ["home", "impound-info","contact-us","faqs"],
      ["home", "impound-info","about-us","faqs"],
      ["home", "about-us","contact-us","faqs"],
      ["home", "impound-info","contact-us","about-us"],
    ]
    useEffect(()=>{
        switch(pathname){
            case "/": 
                setIndex(0);
                break;
            case "/about-us":
                setIndex(1);
                break;
            case "/contact-us":
                setIndex(2);
                break;
            case "/impound-info":
                setIndex(3);
                break;
            case "/faqs":
                setIndex(4);
                break;
        }
    },[pathname])

    return (
      <header className={`absolute top-0 h-16 w-full flex justify-end items-center gap-8 px-8 font-kadwa z-50 ${pathname === '/contact-us' && 'bg-[#6E6E6E]'}`}>
        {
          Routing[index].map((item,index)=>(
            <Link 
              href={`/${item}`} key={index} 
              className={`${(pathname === '/about-us' || pathname === '/contact-us') ? 'text-white':'text-black'}`}
            >{item}</Link>
          ))
        }
      </header>
    );
};

export default TabletNav;