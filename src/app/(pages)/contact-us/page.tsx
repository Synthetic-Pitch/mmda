

import Dashboard from '@/app/component/contact-us/dashboard'
import Phase1 from '@/app/component/contact-us/phase1'
import Phase2 from '@/app/component/contact-us/phase2'
import React from 'react'

const Page = () => {
  return (
    <div >
        <section className='hidden lg:flex justify-center h-screen w-full relative'>
          <Dashboard/>
          <Phase1/>
          <Phase2/>
        </section>
    </div>
  )
}

export default Page