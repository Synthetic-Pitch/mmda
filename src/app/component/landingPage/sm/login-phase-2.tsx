import React from 'react';

const LoginPhase2 = () => {

  return (
    <div className='w-full h-full flex flex-col items-center justify-evenly font-krona-One'>
        <button>login</button>
        <button>create account</button>
        <div className='flex items-center justify-center gap-3'>
            <hr className='h-[3px] bg-black w-[100px]'/>
            <span>OR</span>
            <hr className='h-[3px] bg-black w-[100px]'/>
        </div>
    </div>
  );
};

export default LoginPhase2;