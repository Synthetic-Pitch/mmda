'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import LoginPhase from './login-phase';
import CreatePhase from './create-phase';

type State = {
    effectSlice: {
        createAccount: boolean;
    };
};

const Condition = () => {
  const createOrder = useSelector((state: State) => state.effectSlice.createAccount);
  
  return (
    <div className='w-full h-[400px] flex items-center justify-center mt-3'>
      {
        createOrder ? (
          <div className='bg-[rgb(217,217,217,.8)] h-full max-h-[450px] w-[90%] max-w-[400px] rounded-3xl py-4'>
            <CreatePhase/>
          </div>
        ):(
          <div className='bg-[rgb(217,217,217,.8)] h-full max-h-[450px] w-[90%] max-w-[400px] rounded-3xl py-4'>
            <LoginPhase/>
          </div>
      )
      }
    </div>
  );
};

export default Condition;