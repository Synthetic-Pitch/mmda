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
            <button className='text-sm text-white cursor-pointer' onClick={()=>route.push('/about-us')}>
                about-us
            </button>
            <button className='text-sm text-white cursor-pointer' onClick={()=>route.push('/FAQs')}>
                FAQs
            </button>
            <button className='text-sm text-white cursor-pointer' onClick={()=>route.push('/contact-us')}>
                contact-us
            </button>
        </div>
    )
}

export default Dashboard