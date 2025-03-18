'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setcreateAccount} from '@/app/redux/effectSlice'
import {setTypeError_Username,setTypeError_Password,setBtnTrigger} from '@/app/redux/login'

import { LoginAction } from '@/app/action/login-action'
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
        },
      
    }
}

const XlLoginCreate = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const credentials = useSelector((state:State)=>state.loginSlice.loginState);


    const handleCreateAccount = () => {
        dispatch(setcreateAccount());
    }
    
    const handleLogin = async  () => {
        // check if the username and password is valid thens set setTypeError_Username/setTypeError_Password
        
        const results = await LoginAction(credentials);
        
        if(!results.username){
            dispatch(setTypeError_Username(true))
        }else dispatch(setTypeError_Username(false))
        
        if(!results.password){
            dispatch(setTypeError_Password(true))
        } else dispatch(setTypeError_Password(false))
        
        if(results.username && results.password){
            const uiid = crypto.randomUUID();
            router.push(`/${uiid}`);
        }
        dispatch(setBtnTrigger());
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