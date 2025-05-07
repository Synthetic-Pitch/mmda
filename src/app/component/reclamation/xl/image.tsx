'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Props = {
    param:number
}

const ImageImport = ({param}:Props) => {
    const [file,setFile] = useState(null);
    const [imageURL,setimageURL] = useState<string>('');

    const submitFile = ( event ) => {
        const file = event.target.files[0]
        const URLs = URL.createObjectURL(file)
        setFile(file);
        setimageURL(URLs);
    }

    useEffect(()=>{
        console.log(imageURL);
        
    },[file])

    return (
        <>  
            <Image onChange={submitFile} src={imageURL} alt='' height={100} width={100}/>
            <label 
                htmlFor={`page${param}`} 
                className='h-full w-full flex items-center justify-center font-jura text-[2vh] select-none'
            >import image</label>
        </>
    );
};

export default ImageImport;