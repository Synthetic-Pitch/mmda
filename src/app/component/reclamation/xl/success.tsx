'use client'
import React, { useEffect, useRef } from 'react'

type Props = {
    valid:boolean
}

const SuccessSubmission= ({valid,}:Props) => {
    const ref = useRef<HTMLDialogElement>(null);
    
    useEffect(()=>{
        console.log('valid',valid);
        
        if(valid){
            if(!ref.current) return;
            ref.current.showModal();
        }else if(!valid){
            if(!ref.current) return;
            ref.current.close();
        }
    },[valid]);
    
    return (
        <dialog
            ref={ref}
            className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[pink] w-[70vw] h-[70vw]'
        >
            <h2>
                SUCCESS
            </h2>
            <button className='text-2xl'>close</button>
        </dialog>
    )
}

export default SuccessSubmission