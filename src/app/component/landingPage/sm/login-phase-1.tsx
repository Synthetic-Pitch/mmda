'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setLogin_Username,setLogin_Password} from '@/app/redux/login';
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
        },
        buttonTrigger:boolean
    }
}

const LoginPhase1 = () => {
  const inputTypeError = useSelector((state:State)=>state.loginSlice.inputTypeError);
  const credentials = useSelector((state:State)=>state.loginSlice.loginState);
  const Trigger = useSelector((state:State)=>state.loginSlice.buttonTrigger);
  const dispatch =useDispatch();

    const [empty,setEmpty] = React.useState({
        usernameEmpty:false,
        passwordEmpty:false
    });
    
    const handleAction =(event:React.FormEvent)=>{
        event.preventDefault();
        console.log('formdata',event.currentTarget);
    }
    
    useEffect(() => {
        //so this is Functional Updater I'd use to check if the username and password is empty
        setEmpty(() => ({
            usernameEmpty: credentials.login_username === '',
            passwordEmpty: credentials.login_password === ''
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Trigger]);

  return (
    <form onSubmit={handleAction} className='h-full w-full flex flex-col items-center justify-center gap-[10%]'>
        <section className='w-[80%] h-[30%] border-2 border-black relative rounded-3xl'>
            <label htmlFor="" className='absolute ml-4 -mt-3 bg-black text-white px-2 rounded-2xl text-sm'> username</label>
            <input 
            autoComplete='off'
              type="text" 
              value={credentials.login_username}
              onChange={(e)=>dispatch(setLogin_Username(e.target.value.trim()))}
              className='h-full w-full px-6'/>

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
                      className='absolute -bottom-3 right-1/2 translate-x-1/2 translate-y-1/2 text-[11px] select-none font-kufam text-red-600'
                  >{
                      empty.usernameEmpty ? "enter username":"wrong username"
                  }</motion.span>
              }
        </section>
        <section className='w-[80%] h-[30%] border-2 border-black relative rounded-3xl'>
            <label htmlFor="" className='absolute ml-4 -mt-3 bg-black text-white px-2 rounded-2xl text-sm'> password</label>
            <input 
              type="text" 
              value={credentials.login_password}
              onChange={(e)=>dispatch(setLogin_Password(e.target.value.trimEnd()))}
              className='h-full w-full px-6'/>
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
                      className='absolute -bottom-3 right-1/2 translate-x-1/2 translate-y-1/2 text-[11px] select-none font-kufam text-red-600'
                  >
                      {
                          empty.passwordEmpty ? "enter password":"wrong password"
                      }                        
                  </motion.span>
              }
        </section>
    </form>
  );
};

export default LoginPhase1;