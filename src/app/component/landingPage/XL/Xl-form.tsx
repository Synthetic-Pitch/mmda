import React from 'react';

const XlForm = () => {
    return (
        <form className='w-full h-full flex flex-col justify-evenly items-center gap-2'>
            <section 
                className='h-[35%] max-h[200px] w-full  border-2 border-black rounded-full relative'
            >
                <label htmlFor="usernameinput" className='absolute top-1 left-5 -mt-4 bg-[#222222] text-white text-[12px] rounded-xl px-3 select-none'>username</label>
                <input 
                    type="text" id='usernameinput' 
                    autoComplete='off'
                    className=' w-full h-full py-2 px-4 rounded-xl font-poppins text-sm'/>
            </section>

            <section 
                className='h-[35%] max-h[200px] w-full  border-2 border-black rounded-full relative'
            >
                <label 
                    htmlFor='passwordinput'
                    className='absolute top-1 left-5 -mt-4 bg-[#222222] text-white text-[12px] rounded-xl px-3 select-none'>password</label>
                <input 
                    type="text" id='passwordinput' autoComplete='off' 
                    className=' w-full h-full py-2 px-4 rounded-xl font-poppins text-sm'/>
            </section>
        </form>
    );
};

export default XlForm;