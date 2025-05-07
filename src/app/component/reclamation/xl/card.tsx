import React from 'react';
import { IoChevronForward } from "react-icons/io5";
import Next from './next';
import Prev from './prev';
import Submit from './submit';
import ImageImport from './image';


type Props = {
    pages: {
        step: string;
        description: string;
    }[];
    param:number;
}

const Card = ({pages,param}:Props) => {
    
    return (
        <div 
            className='h-[95%] w-[70vw] bg-[rgb(217,217,217,.3)] rounded-[5vh] flex flex-col items-center'>
            <h1 
                className='w-full h-[30%] text-[5vh] font-bold flex items-center justify-center select-none'
            >
                {pages[param-1].step}
            </h1>
            
            <p className='text-[3.5vh] h-[10%] text-center select-none'>{pages[param-1].description}</p>
            
            <section className='bg-[#D9D9D9] h-[35%] w-[60%] relative'>
                
                <ImageImport param={param}/>
            </section>
            
            <footer className=' w-full h-[25%] flex'>
                <section className='w-[50%] h-full flex items-center justify-center'>
                    {
                        param !== 1 && (
                            <main className='flex items-center justify-center cursor-pointer hover:underline'>
                                <IoChevronForward className='text-[2.5vw] rotate-[180deg]'/>
                                <Prev param={param} className='font-poppins text-[1.8vw] select-none'/>
                            </main>
                        )
                    }
                </section>

                <section className='w-[50%] h-full flex items-center justify-center'>
                    {
                        param < 4 ? (
                            <main className='flex items-center cursor-pointer hover:underline'>
                                <Next param={param} className='font-poppins text-[1.8vw] select-none'/>
                                <IoChevronForward className='text-[2.5vw]'/>
                            </main>
                        ):(
                            <main className='flex items-center hover:underline '>
                                <Submit className='font-poppins text-[1.8vw] select-none cursor-pointer'/>
                            </main>
                        )
                    }
                </section>
                
            </footer>
        </div>
    );
};

export default Card;