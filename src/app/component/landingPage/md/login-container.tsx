import React from 'react';
import LoginPhase from './login-phase';
import CreateAccountBtn from './create-account-btn';
import Platforms from './platforms';

const LoginContainer = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center gap-[3%]'>
        <LoginPhase/>
        <CreateAccountBtn/>
        <Platforms/>
    </div>
  );
};

export default LoginContainer;