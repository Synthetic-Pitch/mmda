import Dashboard from '@/app/component/impound/xl/dashboard'
import Header from '@/app/component/impound/xl/header'
import Hero from '@/app/component/impound/xl/hero'
import Section from '@/app/component/impound/xl/section'
import React from 'react'

const page = () => {

    return (
        <main className='bg-[#8B8787]'>
            <section className='hidden lg:flex flex-col items-center'>
                <div className='h-screen sticky top-0 max-h-[1500px] w-full max-w-[1500px]'>
                    <Dashboard/>
                    <Header/>
                    <Hero/>
                </div>
                <div className='min-h-screen w-full relative z-10'>
                   <Section/>
                </div>
            </section>
        </main>
    )
}

export default page