'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setcreateAccount} from '@/app/redux/effectSlice'
import {setTypeError_Username,setTypeError_Password} from '@/app/redux/login'
import { useRouter } from 'next/navigation';


type State = {
    loginSlice:{
        loginState:{
            login_username:string;
            login_password:string;
        },
        inputTypeError:{
            username:false,
            password:false
        }
    }
}

const XlLoginCreate = () => {
    const dispatch = useDispatch();
    const credentials = useSelector((state:State)=>state.loginSlice.loginState);
    const route = useRouter();
    const handleCreateAccount = () => {
        dispatch(setcreateAccount());
    }
    
    const handleLogin = () => {
        if(credentials.login_username === '' && credentials.login_password === '')return
        if(credentials.login_username !== 'reymark'){
            dispatch(setTypeError_Username(true));
        }else dispatch(setTypeError_Username(false));

        if(credentials.login_password !== 'dequito'){
            dispatch(setTypeError_Password(true))
        }else dispatch(setTypeError_Password(false));
        if(credentials.login_username === 'reymark' && credentials.login_password === 'dequito'){
            route.push('/test');
        }
    }

    return (
        <div className='flex flex-col items-center justify-evenly w-full h-full'>
            <button 
                onClick={handleLogin}
                className='cursor-pointer font-krona-One text-[12px] hover:underline hover:text-[14px]'>Log in</button>
            <button 
                onClick={handleCreateAccount}
                className='cursor-pointer font-krona-One text-[12px] hover:underline hover:text-[14px]'>create account</button>
           
        </div>
    );
};

export default XlLoginCreate;