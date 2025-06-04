'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCreate_Username,setCreate_Gmail,setCreate_Password} from '@/app/redux/login'
import { CreateAccount } from '@/app/action/create-account-action';
import {setcreateAccount} from '@/app/redux/effectSlice'
import { motion } from 'framer-motion';
import Image from 'next/image';

type State = {
    loginSlice: {
        createAccount:{
            create_username:string;
            create_password:string;
            create_gmail:string;
        }
    }
}

const CreatePhase = () => {
  const create = useSelector((state:State)=>state.loginSlice.createAccount);
  const dispatch = useDispatch();
  const [uploading,setUploading] = useState(false);

  const [status,setStatus] = useState ({
      emptyUsername:false,
      emptyPassword:false,
      emptyGmail:false
  })

 const handleCreateAccount = async () => {
        // Basically check if one of them is empty string the show the warning;
        if(create.create_username === '' && create.create_password === '' && create.create_gmail === ''){
            setStatus(prev=>({...prev,emptyUsername:true}))
            setStatus(prev=>({...prev,emptyPassword:true}))
            setStatus(prev=>({...prev,emptyGmail:true}))
            return;
        }else{
            if(create.create_username.length === 0){
                return setStatus(prev=>({...prev,emptyUsername:true}))
            }else setStatus(prev=>({...prev,emptyUsername:false}))
            if(create.create_password.length === 0){
                return setStatus(prev=>({...prev,emptyPassword:true}))
            }else setStatus(prev=>({...prev,emptyPassword:false}))
            if(create.create_gmail.length === 0){
                return setStatus(prev=>({...prev,emptyGmail:true}))
            }else setStatus(prev=>({...prev,emptyGmail:false}))
        }

        
        
        try{
            setUploading(true);
            const res = await CreateAccount({
                createUsername: create.create_username,
                createPassword: create.create_password,
                createGmail: create.create_gmail
            });
            if(res){
                dispatch(setCreate_Username(''));
                dispatch(setCreate_Password(''));
                dispatch(setCreate_Gmail(''));
            }
        }catch(err){
            console.log(err);
        }
        finally{
            setUploading(false);
            setTimeout(() => {
                dispatch(setcreateAccount());
            },1000);
        }
    }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-[7%]'>
        <section className='w-[80%] h-[20%] max-h-[60px] border-2 border-black rounded-2xl relative'>
          <input 
            value={create.create_username} autoComplete='off'
            onChange={(e)=>dispatch(setCreate_Username(e.target.value.trim()))}
            type="text" 
            className='h-full w-full px-4'
            placeholder='username' />
            {
                status.emptyUsername && 
                <motion.span 
                    initial={{opacity:0}}
                    animate={{
                        opacity:1,
                        x:[1,-1,1,0]
                    }}
                    transition={{
                        duration:0.2
                    }}
                    className='absolute top-[100%] left-1/2 -translate-x-1/2 text-[12px] text-[#ff4646]'>enter username
                </motion.span>
            }
        </section>

        <section className='w-[80%] h-[20%] max-h-[60px] border-2 border-black rounded-2xl relative'>
          <input 
            value={create.create_password}  autoComplete='off'
            onChange={(e)=>dispatch(setCreate_Password(e.target.value.trim()))}
            type="text" 
            className='h-full w-full px-4'
            placeholder='password' />
            {
                status.emptyPassword &&
                <motion.span 
                    initial={{opacity:0}}
                    animate={{
                        opacity:1,
                        x:[1,-1,1,0]
                    }}
                    transition={{
                        duration:0.2
                    }}
                    className='absolute top-[100%] left-1/2 -translate-x-1/2 text-[12px] text-[#ff4646]'>enter password
                </motion.span>
            }
        </section>

        <section className='w-[80%] h-[20%] max-h-[60px] border-2 border-black rounded-2xl relative'>
          <input 
            value={create.create_gmail}  autoComplete='off'
            onChange={(e)=>dispatch(setCreate_Gmail(e.target.value.trim()))}
            type="text" 
            className='h-full w-full px-4'
            placeholder='gmail'/>
            {   
              status.emptyGmail &&
              <motion.span 
                  initial={{opacity:0}}
                  animate={{
                      opacity:1,
                      x:[1,-1,1,0]
                  }}
                  transition={{
                      duration:0.2
                  }}
                  className='absolute top-[100%] left-1/2 -translate-x-1/2 text-[12px] text-[#ff4646]'>enter gmail
              </motion.span>
            }
        </section>

        <button
          onClick={handleCreateAccount}
          className='hover:underline font-krona-One text-sm'>create</button>
        {
        uploading && 
        <Image 
            src="/assets/images/createloading.png" alt=''
            height={20} width={20}
            className='animate-spin'
        />
    }
    </div>
  );
};

export default CreatePhase;