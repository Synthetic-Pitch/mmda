'use client'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCreate_Username,setCreate_Gmail,setCreate_Password} from '@/app/redux/login'
import {motion} from 'framer-motion';


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
    const [status,setStatus] = useState({
        emptyUsername:false,
        emptyPassword:false,
        emptyGmail:false
    })
    
    const handleCreateAccount = async () => {
        if(create.create_username.length === 0){
            setStatus(prev=>({...prev,emptyUsername:true}))
        }
        if(create.create_password.length === 0){
            setStatus(prev=>({...prev,emptyPassword:true}))
        }
        if(create.create_gmail.length === 0){
            setStatus(prev=>({...prev,emptyGmail:true}))
        }
    }

    return (
        <div className='w-[350px] h-[80%] max-h-[500px] py-10 px-6 bg-[rgb(217,217,217,.65)] -mt-[60px] rounded-4xl flex flex-col'>

            <main className='h-[70%] w-full flex flex-col justify-evenly'>
                <section className='w-full h-[25%] border-2 rounded-full relative flex justify-center'>
                    <input 
                        value={create.create_username} autoComplete='off'
                        onChange={(e)=>dispatch(setCreate_Username(e.target.value.trim()))}
                        type="text" 
                        className='w-full h-full  px-4 font-poppins placeholder:text-black placeholder:text-sm' placeholder='username' />
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
                            className='absolute top-[100%] text-sm text-[red]'>enter username
                        </motion.span>
                    }
                    
                </section>
                
                <section className='w-full h-[25%] border-2 rounded-full relative flex justify-center'>
                    <input 
                        value={create.create_password}  autoComplete='off'
                        onChange={(e)=>dispatch(setCreate_Password(e.target.value.trim()))}
                        type="text" 
                        className='w-full h-full  px-4 font-poppins placeholder:text-black placeholder:text-sm' placeholder='password' />

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
                            className='absolute top-[100%] text-sm text-[red]'>enter username
                        </motion.span>
                    }

                </section>

                <section className='w-full h-[25%] border-2 rounded-full relative flex justify-center'>
                    <input 
                        value={create.create_gmail}  autoComplete='off'
                        onChange={(e)=>dispatch(setCreate_Gmail(e.target.value.trim()))}
                        type="text" 
                        className='w-full h-full  px-4 font-poppins placeholder:text-black placeholder:text-sm' placeholder='gmail' />
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
                            className='absolute top-[100%] text-sm text-[red]'>enter username
                        </motion.span>
                    }
                </section>
            </main>

            <footer className='h-[20%] flex items-center justify-center'>
                <button 
                    onClick={handleCreateAccount}
                    className='px-4 py-1 rounded-full font-krona-One text-[12px] hover:underline hover:scale-[1.2]'>
                    create
                </button>
            </footer>
        </div>
    );
};

export default XlCreateAccount;