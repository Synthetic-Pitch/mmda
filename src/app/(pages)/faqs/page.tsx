
import Accordions from '@/app/component/faqs/xl/accordion'
import Dashboard from '@/app/component/faqs/xl/dashboard'
import Header from '@/app/component/faqs/xl/header'

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
    </div>  
)
}

export default Page