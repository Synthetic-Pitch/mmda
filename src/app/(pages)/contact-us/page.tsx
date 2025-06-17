
import Dashboard from '@/app/component/contact-us/dashboard'
import MdBody from '@/app/component/contact-us/md/mdBody'
import Phase1 from '@/app/component/contact-us/phase1'
import Phase2 from '@/app/component/contact-us/phase2'
import SmBody from '@/app/component/contact-us/sm/sm-body'
import MobileNav from '@/app/component/navbar/mobileNav'
import TabletNav from '@/app/component/navbar/tabletNav'
import React from 'react'

const Page = () => {

  return (
    <div >
        <section className='hidden lg:flex justify-center h-screen w-full relative'>
          <Dashboard/>
          <Phase1/>
          <Phase2/>
        </section>
        <section className='sm:hidden'>
          <MobileNav/>
          <SmBody/>
        </section>
        <section className='hidden sm:block lg:hidden'>
          <TabletNav/>
          <MdBody/>
        </section>
    </div>
  )
}

export default Page