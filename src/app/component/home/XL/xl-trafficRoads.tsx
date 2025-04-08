import React from 'react';
import { FaCar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


const XlTrafficRoads = () => {
    
    const redRoads = [
        'España Boulevard','Katipunan Avenue','Gil Puyat Avenue (Buendia)',
        'Recto Avenue','Araneta Avenue'
    ]
    const orangeRoads = [
        'Quezon Avenue','Roxas Boulevard','Taft Avenue',
        'Quirino Avenue','Epifanio de los Santos Avenue','(EDSA)',
        'Circumferential Road 5 (C-5 Road)'
    ]
    const greenRoads = [
        'Magsaysay Boulevard','Ortigas Avenue','Commonwealth Avenue',
        'Ayala Avenue','General Luis Street'
    ];

    return (
        <div className='bg-[#EBEBEB] min-h-screen sticky'>
            <main className='absolute inset-0 max-w-[2000px] m-auto'>
                <header className='relative h-[20%] flex items-center px-20'>
                    <FaCar size={60} className=''/>
                    <span className='font-poppins text-4xl pl-8 font-extrabold'>TRAFFIC ROADS TO AVOID</span>
                </header>

                <section
                    className='relative min-h-[80%] w-full grid grid-cols-2'
                >
                    <div style={{gridColumn:'1/2',height:'100%'}}>
                        <header className='px-10 flex items-center'>
                            <GoDotFill size={30} color='green'/>
                            <span className='font-poppins font-bold text-2xl tracking-wider text-[green] '>Light Traffic</span>
                        </header>
                        <div className='py-2 px-17 flex flex-col gap-2'>
                            {
                                greenRoads.map((roads,index)=>(
                                    <div key={index} className='text-md'>
                                        {roads}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div style={{gridColumn:'2/3'}}>
                        <header className='px-10 flex items-center'>
                            <GoDotFill size={30} color='#CF6F34'/>
                            <span className='font-poppins font-bold text-2xl tracking-wider text-[#CF6F34] '>Light Traffic</span>
                        </header>
                        <div className='py-2 px-17 flex flex-col gap-2'>
                            {
                                orangeRoads.map((roads,index)=>(
                                    <div key={index} className='text-md'>
                                        {roads}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div style={{gridColumn:'1/2'}}>
                        <header className='px-10 flex items-center'>
                            <GoDotFill size={30} color='red'/>
                            <span className='font-poppins font-bold text-2xl tracking-wider text-[red] '>Light Traffic</span>
                        </header>
                        <div className='py-2 px-17 flex flex-col gap-2'>
                            {
                                redRoads.map((roads,index)=>(
                                    <div key={index} className='text-md'>
                                        {roads}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default XlTrafficRoads;