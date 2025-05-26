import Image from 'next/image'
import React from 'react'
import img1 from '../../../../../public/assets/images/mmda-background.png'
import Login from './login'
import img2 from '../../../../../public/assets/images/qr-code.png'


const Background = () => {
   
  return (
    <div className='relative h-[calc(100dvh-120px)] w-full overflow-hidden'>
        <section className='h-[80%] w-full relative'>
            <header className='absolute top-0 h-[150px] w-full z-40 font-koulen flex flex-col justify-center items-center text-6xl text-[#BABABA] tracking-wider select-none'>
                <h2
                    style={{WebkitTextStroke:"2px #606060", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}
                >METRO POLITAN MANILA</h2>
                <h2
                    style={{WebkitTextStroke:"2px #606060", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}
                >DEVELOPMENT AUTHORITY</h2>
            </header>
            <Login/>
            <div
                style={{clipPath:'polygon(0 0, 20% 0, 100% 100%, 0 100%)'}}
                className='bg-[#94A6FF] h-full z-20 relative'
            />
            <div
                style={{clipPath:'polygon(0 0, 40% 0, 120% 100%, 0 100%)'}} 
                className='h-full w-full bg-[rgb(148,166,255,.5)] absolute top-0 z-10'/> 
            <Image src={img1} alt='' className='absolute top-0 h-full object-cover z-0' draggable={false}/>
        </section>
        <footer className='h-[20%] w-full bg-[#94A6FF] relative'>
            <div className='absolute -top-10 flex px-10 items-center z-40 '>
                <Image src={img2} alt='' height={160} width={160} className=' '/>
                <div>
                    <div className='font-kumar-One text-6xl'>R</div>
                    <p className='font-krona-One text-sm'>download through<br/> our application</p>
                </div>
            </div>
            <figure className='absolute -top-4 h-[400px] w-[300px] -translate-y-[50px] ml-2 rounded-2xl bg-[rgb(217,217,217,.3)] z-30'/>
            <figure className='absolute top-0 h-[150px] w-[190px] -translate-y-[10px] ml-[100px] rounded-2xl bg-[rgb(217,217,217,.4)] z-30'/>
        </footer>
    </div>
  )
}

export default Background