import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div 
        className=' h-[10vh] w-full absolute top-0 flex items-center justify-end px-[4.5vw] text-[1.6vw] gap-[2vw] text-white'>
        <Link href={'/home'}>home</Link>
        <Link href={'/home'}>about</Link>
        <Link href={'/home'}>FAQs</Link>
        <Link href={'/home'}>impound-info</Link>
    </div>
  )
}

export default Dashboard