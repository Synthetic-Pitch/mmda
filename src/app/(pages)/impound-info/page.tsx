import SmBody from '@/app/component/impound/sm/sm-body'
import Dashboard from '@/app/component/impound/xl/dashboard'
import Header from '@/app/component/impound/xl/header'
import Hero from '@/app/component/impound/xl/hero'
import Section from '@/app/component/impound/xl/section'
import MobileNav from '@/app/component/navbar/mobileNav'
import TabletNav from '@/app/component/navbar/tabletNav'
import React from 'react'

const page = () => {

    return (
        <main>
            <section className='hidden lg:flex flex-col items-center bg-[#8B8787]'>
                <div className='h-screen sticky top-0 max-h-[1500px] w-full max-w-[1500px]'>
                    <Dashboard/>
                    <Header/>
                    <Hero/>
                </div>
                <div className='min-h-screen w-full relative z-10'>
                   <Section/>
                </div>
            </section>
            <section className='sm:hidden relative'>
                <MobileNav/>
                <SmBody/>
            </section>
            <section className='hidden sm:block lg:hidden'>
                <TabletNav/>
            </section>
        </main>
    )
};

export default page