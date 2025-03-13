import React from 'react';
import Image from 'next/image';
import XlButtons from './xl-buttons';
import XlLogin from './Xl-login';
const XL = () => {
    return (
        <div className='relative z-[5] h-full w-full flex flex-col '>
            <header className='flex items-center h-26 w-full'>
                <figure className='w-[12%] h-[70%] relative'>
                    <Image 
                        src='/assets/icons/mmda-icon.png' alt=''
                        fill draggable={false}
                        className='h-full object-contain'
                    />
                </figure>
                <main className='w-[40%] flex justify-evenly ml-auto text-white'>
                    <XlButtons/>
                </main>
            </header>
            <section className='pl-20 space-y-2 select-none'>
                <h2     
                    style={{WebkitTextStroke:'2px #535353',textShadow: "-4px 4px 4px rgba(0, 0, 0, 0.5)" }}
                    className="text-[5.3rem] font-koulen text-[#BABABA] stroke-text">MEtropolitan manila </h2>
                <h2 
                    style={{WebkitTextStroke:'2px #535353',textShadow: "-4px 4px 4px rgba(0, 0, 0, 0.5)" }}
                    className='text-[5.3rem] font-koulen text-[#BABABA]'>development authority</h2>
            </section>
            <main className='flex-grow w-full flex'>
                <aside className='w-[50%] h-full relative select-none'>

                    <div className='absolute h-[130px] w-[130px] bg-[rgb(217,217,217,.22)] bottom-20 left-6 rounded-2xl'/>
                    <div className='h-[300px] w-[300px] bg-[rgb(217,217,217,.22)] absolute bottom-2 left-20 rounded-[40px]'/>
                
                    <section className='absolute bottom-6 left-14 flex items-center'>
                        <figure className='relative h-30 w-30 '>
                            <Image draggable={false} src='/assets/images/qr-code.png' alt='' fill/> 
                        </figure>
                        <article className='h-30 w-30 flex flex-col pl-2 justify-center'>
                            <h1 className='text-5xl font-kumar-One'>
                                R
                            </h1>
                            <p className='text-[10px] font-krona-One'>
                                download through our application
                            </p>
                        </article>
                    </section>

                </aside>
                <aside className='w-[50%] h-full flex items-center pl-40'>
                    <XlLogin/>
                </aside>
            </main>
        </div>
    );
};

export default XL;