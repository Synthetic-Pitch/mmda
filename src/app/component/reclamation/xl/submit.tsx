'use client'
import React from 'react';

type Props = {
    className: string
}

const Submit = ({className}:Props) => {
    const handleSubmit = () => {
        console.log('hi');
    }
    
    return (
        <button className={`${className}`} onClick={handleSubmit}>Submit</button>
    );
};

export default Submit;