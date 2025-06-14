
import Smbody from '@/app/component/faqs/sm/smbody'
import Accordions from '@/app/component/faqs/xl/accordion'
import Dashboard from '@/app/component/faqs/xl/dashboard'
import Header from '@/app/component/faqs/xl/header'
import MobileNav from '@/app/component/navbar/mobileNav'

import React from 'react'

const Page = () => {
  return (
    <div>
        <section className='hidden lg:flex flex-col items-center justify-center'>
            <main className='w-full max-w-[1500px]'>
                <Dashboard/>
                <Header/>
               <Accordions/>
            </main>
        </section>
        <section className='sm:hidden'>
            <MobileNav/>
            <Smbody/>
        </section>
    </div>  
)
}

export default Page