
import React from 'react';
import { MdFlood } from "react-icons/md";
import Image from 'next/image';
import img1 from '../../../../../public/assets/images/floodcontrol1.png'
import img2 from '../../../../../public/assets/images/floodcontrol2.png'
import img3 from '../../../../../public/assets/images/floodcontrol3.png'


const XlFloodControl = () => {
            
    return (
        <div className='bg-[#D0D8FF] flex-grow flex justify-center'>
            <main className='w-full max-w-[2000px] h-full flex justify-center items-center py-10'>
                <article className='h-[90%] w-[45%] space-y-[10%] select-none flex flex-col'>
                    <h1 className='text-4xl font-poppins font-black' style={{fontWeight:'900'}}>Flood control Projects</h1>
                    <p className='font-poppins w-[80%] text-xl'>
                        ​Protecting our communities from floods requires collective action. By investing in infrastructure, promoting sustainable practices, and raising awareness, we can build resilience and safeguard our future.
                    </p>
                    <footer className='flex gap-3 items-center mb-[10rem]'>
                        <MdFlood className='text-4xl'/>
                        <p className='font-poorStory text-xl'>by maintaning sewage flow we prevent flood</p>
                    </footer>
                </article>
                <figure className='h-[90%] w-[45%] grid grid-cols-2 grid-rows-2 gap-4 relative'>
                   <div style={{gridRow:'2/3',gridColumn:"1/3"}} className='flex justify-center items-center'>
                        <Image 
                            alt="" height={200} width={300} src={img1} 
                            className='object-contain -mt-12 z-1 ' draggable={false}
                            style={{boxShadow:'0px 4px 10px rgba(0, 0, 0, .5)'}}
                        />
                   </div>
                   <div style={{gridColumn:'1/2',gridRow:'1/2'}} className=' flex justify-center items-center'>
                        <Image 
                            alt="" src={img2} draggable={false} height={100} width={240} 
                            className='object-contain rotate-[-10deg]'
                            style={{boxShadow:'0px 4px 10px rgba(0, 0, 0, .5)'}}
                        />
                   </div>
                   <div style={{gridColumn:'2/3',gridRow:'1/2'}} className=' flex justify-center items-center'>
                        <Image 
                            alt="" src={img3} draggable={false} height={100} width={240} 
                            className='object-contain rotate-[10deg]'
                            style={{boxShadow:'0px 4px 10px rgba(0, 0, 0, .5)'}}
                        />
                   </div>
                </figure>
            </main>
        </div>
    );
};

export default XlFloodControl;