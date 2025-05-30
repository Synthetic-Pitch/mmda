import React from 'react';

const LoginPhase1 = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center gap-[10%]'>
        <section className='w-[80%] h-[30%] border-2 border-black relative rounded-3xl'>
            <label htmlFor="" className='absolute ml-4 -mt-3 bg-black text-white px-2 rounded-2xl text-sm'>enter username</label>
            <input type="text" name='username' className='h-full w-full px-6'/>
        </section>
        <section className='w-[80%] h-[30%] border-2 border-black relative rounded-3xl'>
            <label htmlFor="" className='absolute ml-4 -mt-3 bg-black text-white px-2 rounded-2xl text-sm'>enter password</label>
            <input type="text" name='password' className='h-full w-full px-6'/>
        </section>
    </div>
  );
};

export default LoginPhase1;