'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
    const route = useRouter();
    return (
        <div className='px-15  h-[10%] w-full flex items-center justify-end gap-5 font-kadwa'>
            <button className='text-sm text-white cursor-pointer' onClick={()=>route.push('/home')}>
                home 
            </button>
            <button className='text-sm text-white cursor-pointer'>
                about
            </button>
            <button className='text-sm text-white cursor-pointer'>
                FAQs
            </button>
            <button className='text-sm text-white cursor-pointer'>
                contact-us
            </button>
        </div>
    )
}

export default Dashboard