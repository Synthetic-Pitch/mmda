import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div 
        className=' h-[10vh] w-full absolute top-0 flex items-center justify-end px-[4.5vw] text-[1.2vw] gap-[2vw] text-white font-kadwa'>
        <Link href={'/home'}>home</Link>
        <Link href={'/about-us'}>about-us</Link>
        <Link href={'/faqs'}>FAQs</Link>
        <Link href={'/impound-info'}>impound-info</Link>
    </div>
  )
}

export default Dashboard