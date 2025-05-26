import Image from 'next/image'
import React from 'react'
import img1 from '../../../../../public/assets/icons/mmda-icon.png'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-[#909192] w-full h-[120px] flex items-center px-[20px] whitespace-nowrap relative'  draggable={false}>
        <Image src={img1} alt='' height={80} width={80} draggable={false}/>
        <ul className='ml-auto flex gap-[4%] mr-[5%] text-white font-kadwa select-none'>
           <Link href="/impound-info">impound-info</Link> 
           <Link href="/faqs">FAQ&apos;s</Link>
           <Link href="/contact-us">contact-us</Link>
           <Link href="/about-us">about-us</Link>
        </ul>
    </header>
  )
}

export default Header