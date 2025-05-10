'use client'
import React, { useState } from 'react';
import { submitForm } from '@/app/action/sumitform';

type Props = {
    param:number
}

const ImageImport = ({param}:Props) => {
    
    const [data,setData] = useState<string>('');

    const handleSubmit = async ()=>{
        console.log(param);
        
        event?.preventDefault();
        
        try{
            const e: string = 'hello'; 
            submitForm({e});
        }
        catch(err){
            console.error(err); console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='h-full w-full bg-[red]'>
            <h1>Data:{data}</h1>
            <button className='text-2xl font-bold'>submit</button>
        </form>
    )
};

export default ImageImport;