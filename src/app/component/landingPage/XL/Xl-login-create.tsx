'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import {setcreateAccount} from '@/app/redux/effectSlice'


const XlLoginCreate = () => {
    const dispatch = useDispatch();

    const handleCreateAccount = () => {
        dispatch(setcreateAccount())
    }
    
    return (
        <div className='flex flex-col items-center justify-evenly w-full h-full'>
            <button 
                className='cursor-pointer font-krona-One text-[12px] hover:underline hover:text-[14px]'>Log in</button>
            <button 
                onClick={handleCreateAccount}
                className='cursor-pointer font-krona-One text-[12px] hover:underline hover:text-[14px]'>create account</button>
           
        </div>
    );
};

export default XlLoginCreate;