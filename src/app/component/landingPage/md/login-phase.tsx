'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

type State = {
    loginSlice :{
        loginState:{
            login_username:string;
            login_password:string;
        },
        inputTypeError:{
            username:false,
            password:false
        },
        buttonTrigger:boolean
    }
}

const LoginPhase = () => {
    const credentials = useSelector((state:State)=>state.loginSlice.loginState);
    const dispatch = useDispatch();
    
    return (
        <>
            <section className='w-[80%] rounded-[40px] h-[15%] max-h-[70px] border-2 border-black relative'>
                <label 
                    htmlFor="username" 
                    className='bg-black text-white px-[8px] rounded-xl absolute -top-3 left-6'
                >username</label>
                <input type="text" id='username' className='h-full w-full px-6'/>
            </section>
            <section className='w-[80%] rounded-[40px] h-[15%] max-h-[70px] border-2 border-black relative'>
                <label 
                    htmlFor="username" 
                    className='bg-black text-white px-[8px] rounded-xl absolute -top-3 left-6'
                >password</label>
                <input type="text" id='username' className='h-full w-full px-6'/>
            </section>
        </>
    )
}

export default LoginPhase;

