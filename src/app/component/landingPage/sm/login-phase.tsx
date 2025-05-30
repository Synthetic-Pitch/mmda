import React from 'react';
import LoginPhase1 from './login-phase-1';
import LoginPhase2 from './login-phase-2';
import LoginPhase3 from './login-phase-3';

const LoginPhase = () => {

  return (
    <div className='w-full h-full'>
        <section className='w-full h-[50%]'>
            <LoginPhase1/>
        </section>
        <section className='w-full h-[20%]'>
            <LoginPhase2/>
        </section>
        <section className='w-full h-[20%]'>
            <LoginPhase3/>
        </section>
    </div>
  );
};

export default LoginPhase;