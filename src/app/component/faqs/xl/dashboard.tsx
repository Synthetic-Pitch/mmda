import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div
        className='h-[64px] flex items-center justify-end px-16 gap-6 font-kadwa text-[14px] relative z-20'
    >
        <div className='flex gap-5'>
            <Link href={'/home'}>Home</Link>
            <Link href={'/about-us'}>about us</Link>
            <Link href={'/impound-info'}>impound-info</Link>
            <Link href={'/contact-us'}>contact us</Link>
        </div>
    </div>
  )
}

export default Dashboard