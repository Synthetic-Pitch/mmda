'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin_Username,setLogin_Password } from '@/app/redux/login';
import { motion } from 'framer-motion';

type State = {
    loginSlice :{
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

const XlForm = () => {
    const inputTypeError = useSelector((state:State)=>state.loginSlice.inputTypeError);
    const credentials = useSelector((state:State)=>state.loginSlice.loginState);
    const dispatch =useDispatch();

    const handleAction =(event:React.FormEvent)=>{
        event.preventDefault();
        console.log('formdata',event.currentTarget);
    }
    
    useEffect(()=>{
        console.log(inputTypeError);
        console.log(credentials);
    },[credentials])
    
    return (
        <form onSubmit={handleAction} className='w-full h-full flex flex-col justify-evenly items-center gap-2'>
            <section 
                className='h-[35%] max-h[200px] w-full  border-2 border-black rounded-full relative'
            >
                <label htmlFor="usernameinput" className='absolute top-1 left-5 -mt-4 bg-[#222222] text-white text-[12px] rounded-xl px-3 select-none'>username</label>
                <input 
                    type="text" id='usernameinput' autoComplete='off'
                    value={credentials.login_username}
                    onChange={(e)=>{
                        const val = e.target.value;
                        dispatch(setLogin_Username(val))
                    }}
                    className=' w-full h-full py-2 px-4 rounded-xl font-poppins text-sm'/>

                {   inputTypeError.username &&
                    <motion.span
                        initial={{opacity:0}}
                        animate={{
                            opacity:1,
                            x:[1,-1,1,0]
                        }}
                        transition={{
                            duration:.2
                        }}
                        className='absolute -bottom-3 right-1/2 translate-x-1/2 translate-y-1/2 text-[12px] select-none font-kufam text-red-600'
                    >wrong username</motion.span>
                }
                
            </section>
                    
            <section
                className='h-[35%] max-h[200px] w-full  border-2 border-black rounded-full relative'
            >
                <label 
                    htmlFor='passwordinput'
                    className='absolute top-1 left-5 -mt-4 bg-[#222222] text-white text-[12px] rounded-xl px-3 select-none'>password</label>
                <input 
                    name='login-password'
                    type="text" id='passwordinput' autoComplete='off' 
                    value={credentials.login_password}
                    onChange={(e)=>{
                        const val = e.target.value;
                        dispatch(setLogin_Password(val))
                    }}
                    className=' w-full h-full py-2 px-4 rounded-xl font-poppins text-sm'/>
                
                {
                    inputTypeError.password && 
                    <motion.span
                        initial={{opacity:0}}
                        animate={{
                            opacity:1,
                            x:[1,-1,1,0]
                        }}
                        transition={{
                            duration:.2
                        }}
                        className='absolute -bottom-3 right-1/2 translate-x-1/2 translate-y-1/2 text-[12px] select-none font-kufam text-red-600'
                    >wrong password</motion.span>
                }
                
            </section>
        </form>
    );
};

export default XlForm;