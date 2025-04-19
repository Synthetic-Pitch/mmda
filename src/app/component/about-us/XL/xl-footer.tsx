import React from 'react'
import {motion} from 'framer-motion'
const XlFooter = () => {
    return (
        <div
            className='bg-gradient-to-b from-[#cecece] to-[#94A6FF] flex-grow  px-10 flex  justify-center'
        >
            <main className=' w-full max-w-[1500px] flex items-center'>
                <section
                    className='bg-[#E8E8E8] h-[70%] max-h-[700px] w-[50%] px-12 select-none '
                >
                    <header className='h-[20%]  w-full  flex flex-col items-center justify-center'>
                        <h2
                            className='font-jura text-5xl z-10 font-bold'
                        >
                            MISSION
                        </h2>
                        <h2
                            className='absolute mt-[60px] text-5xl font-jura opacity-[.2] shadow-2xl font-bold'
                        >MISSION</h2>
                    </header>
                    <main className='h-[80%] w-full flex flex-col  gap-[20%] py-10'>
                        <p className='font-jura'>
                            As a global-oriented metropolis, Metropolitan Manila will evolve into a major business and transaction center in the Asia-Pacific region.
                        </p>
                        <p className='font-jura'>
                            As a center of a growth polygon for Luzon Island, Metropolitan Manila will influence the creation of socio-economic opportunities in the areas beyond its political and administrative boundaries.
                        </p>
                    </main>
                </section>

                <motion.section
                    initial={{
                        x:0
                    }}
                    whileHover={{
                        x:[1,20,-30]
                    }}
                    className='bg-[#969696] h-[60%] w-[40%] px-10 cursor-pointer'
                >
                    <header className='h-[20%] flex items-center justify-center text-3xl font-bold font-jura text-white'>
                        VISION
                    </header>
                    <p className='font-jura text-2xl text-white text-center'>Towards a humane, world-class metropolis with a livable and workable physical environment for all.</p>
                </motion.section>
            </main>
        </div>
    )
}

export default XlFooter