'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { TiThMenu } from "react-icons/ti";


const MobileNav = () => {
    const pathname = usePathname();
    const [index,setIndex] = useState(0);
    const [open,isOpen] = useState(false);

    const Routing = [
        ["about-us", "impound-info","contact-us","faqs"],
        ["home", "impound-info","contact-us","faqs"],
        ["home", "impound-info","about-us","faqs"],
        ["home", "about-us","contact-us","faqs"],
        ["home", "impound-info","contact-us","about-us"],
    ];
    
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

    const handleClick = () => {
        isOpen(!open)
    }

    return (
        <div className='absolute top-0 w-full h-12 z-50 flex items-center justify-end px-4'>
            <TiThMenu size={40} onClick={handleClick} className={`${open && 'scale-[.8]'} transition-transform duration-100`}/>
            {
                open && (
                    <div className='absolute top-2 left-2 bg-[#5B5B5B] py-8 px-8 select-none rounded-2xl text-white text-xl flex flex-col gap-3'>
                        {
                            Routing[index].map((item,index)=>(
                                <Link href={`/${item}`} key={index} className='cursor-pointer'>
                                    {item}
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default MobileNav;