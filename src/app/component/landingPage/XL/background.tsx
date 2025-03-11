import React from 'react';

const Background = () => {
    return (
        <div className='absolute top-0 bg-[pink] z-0 h-full w-full'>
            <section 
                style={{clipPath:'polygon(0 0, 20% 0, 70% 100%, 0% 100%)'}}
                className='relative h-full w-[80%] bg-[#94A6FF] z-[2]'
            >
                
            </section>
            
            <section 
                style={{clipPath:'polygon(0 0, 30% 0, 80% 100%, 0% 100%)'}}
                className='absolute top-0 h-full w-[80%] bg-[rgb(173,187,255,.48)] z-[1]'
            >
                
            </section>
            <section className='absolute top-0 right-0 h-full w-[90%] bg-[rgb(0,128,0)] z-0'>
            
            </section>
        </div>
    );
};

export default Background;