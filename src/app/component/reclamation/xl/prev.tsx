'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
    className:string;
    param:number;
}

const Prev = ({className,param}:Props) => {
    const route = useRouter();
    
    const handlePrev = () => {
        if(param < 5 && param > 0){
            route.push(`/reclamation/${param-1}`);
        }else return;
    }
    return (
        <button className={`${className}`} onClick={handlePrev}>Prev</button>
    );
};

export default Prev;