'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

type Styled = {
    className?: string;
    param:number
}

const Next = ({className,param}:Styled) => {
    const route = useRouter()

    const handleNext = ()=>{
       route.push(`/reclamation/${param+1}`)
    }
    return (
        <button className={`${className}`} onClick={handleNext}>Next</button>
    );
};

export default Next;