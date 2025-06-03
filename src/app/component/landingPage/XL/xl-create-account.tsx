'use client'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCreate_Username,setCreate_Gmail,setCreate_Password} from '@/app/redux/login'
import {motion} from 'framer-motion';
import Image from 'next/image';
import { CreateAccount } from '@/app/action/create-account-action';
import {setcreateAccount} from '@/app/redux/effectSlice'

type State = {
    loginSlice: {
        createAccount:{
            create_username:string;
            create_password:string;
            create_gmail:string;
        }
    }
}

const XlCreateAccount = () => {
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
        <div className='w-[350px] h-[80%] max-h-[500px] py-8 px-6 bg-[rgb(217,217,217,.65)] -mt-[60px] rounded-4xl flex flex-col'>

            <main className='h-[80%] w-full flex flex-col justify-evenly'>
                <section className='w-full h-[22%] border-1 border-black rounded-full relative flex justify-center'>
                    <input 
                        value={create.create_username} autoComplete='off'
                        onChange={(e)=>dispatch(setCreate_Username(e.target.value.trim()))}
                        type="text" 
                        className='w-full h-full  px-4 font-poppins placeholder:text-black placeholder:text-[12px]' placeholder='username' />
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
                            className='absolute top-[100%] text-[12px] text-[#ff4646]'>enter username
                        </motion.span>
                    }
                    
                </section>
                
                <section className='w-full h-[22%] border-1 border-black rounded-full relative flex justify-center'>
                    <input 
                        value={create.create_password}  autoComplete='off'
                        onChange={(e)=>dispatch(setCreate_Password(e.target.value.trim()))}
                        type="text" 
                        className='w-full h-full  px-4 font-poppins placeholder:text-black placeholder:text-[12px]' placeholder='password' />

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
                            className='absolute top-[100%] text-[12px] text-[#ff4646]'>enter password
                        </motion.span>
                    }

                </section>

                <section className='w-full h-[22%] border-1 border-black rounded-full relative flex justify-center'>
                    <input 
                        value={create.create_gmail}  autoComplete='off'
                        onChange={(e)=>dispatch(setCreate_Gmail(e.target.value.trim()))}
                        type="text" 
                        className='w-full h-full  px-4 font-poppins placeholder:text-black placeholder:text-[12px]' placeholder='gmail' />
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
                            className='absolute top-[100%] text-[12px] text-[#ff4646]'>enter username
                        </motion.span>
                    }
                </section>
            </main>

            <footer className='h-[20%] flex items-center justify-center relative'>
                <button 
                    onClick={handleCreateAccount}
                    className='px-4 py-1 rounded-full font-krona-One text-[12px] hover:underline hover:scale-[1.2]'>
                    create
                </button>
                {
                    uploading && 
                    <Image 
                        src="/assets/images/createloading.png" alt=''
                        height={20} width={20}
                        className='animate-spin'
                    />
                }
            </footer>
        </div>
    );
};

export default XlCreateAccount;