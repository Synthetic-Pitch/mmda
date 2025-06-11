'use client'
import React, { useState } from 'react';

const useContactUs = () => {
    const [number,setNUmber] = useState<string >('')
    const [name,setName] = useState<string>('');
    const [gmail,setGmail] = useState<string>('')
    const [message,setMessage] = useState<string>('')
    
    const handleSubmit = ()=>{
        setNUmber('')
        setName('')
        setGmail('')
        setMessage('')
    }
    const handleName = (e:React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value);
    const handleNumber = (e:React.ChangeEvent<HTMLInputElement>)=> setNUmber(e.target.value);
    const handleGmail = (e:React.ChangeEvent<HTMLInputElement>)=> setGmail(e.target.value);
    const handleMessage = (e:React.ChangeEvent<HTMLTextAreaElement>)=> setMessage(e.target.value);

    return {
        handleSubmit,number,name,gmail,message,
        handleName,handleNumber,handleMessage,handleGmail
    }
};

export default useContactUs;