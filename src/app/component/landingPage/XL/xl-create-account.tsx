import React from 'react';

const XlCreateAccount = () => {
    
    return (
        <div className='w-[350px] h-[80%] max-h-[500px] py-10 px-6 bg-[rgb(217,217,217,.65)] -mt-[60px] rounded-4xl flex flex-col'>
            <main className='h-[70%] w-full flex flex-col justify-evenly'>
                <section className='w-full h-[25%] border-2 rounded-full overflow-hidden'>
                    <input 
                        type="text" 
                        className='w-full h-full  px-4 font-poppins placeholder:text-black placeholder:text-sm' placeholder='username' />
                </section>
                <section className='w-full h-[25%] border-2 rounded-full overflow-hidden'>
                    <input 
                        type="text" 
                        className='w-full h-full  px-4 font-poppins placeholder:text-black placeholder:text-sm' placeholder='password' />
                </section>
                <section className='w-full h-[25%] border-2 rounded-full overflow-hidden'>
                    <input 
                        type="text" 
                        className='w-full h-full  px-4 font-poppins placeholder:text-black placeholder:text-sm' placeholder='gmail' />
                </section>
            </main>
            <footer className='h-[20%] flex items-center justify-center'>
                <button className='px-4 py-1 rounded-full font-krona-One text-[12px] hover:underline hover:scale-[1.2]'>
                    create
                </button>
            </footer>
        </div>
    );
};

export default XlCreateAccount;