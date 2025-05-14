'use client'
import React, { useRef, useState } from 'react';
import { submitForm } from '@/app/action/sumitform';
import { useSelector } from 'react-redux';

type Props = {
    className: string
}

type State = {
    reclamationSlice:{
        Gov_ID:{
            image1:string;
            image2:string;
        },
        OR_CR:{
            image1:string;
            image2:string;
        },
        Ticket:{
            image1:string;
        },
        License:{
            image1:string;
            image2:string;
        }
    }
}

const Submit = ({className}:Props) => {
    const reclamationImg = useSelector((state:State)=> state.reclamationSlice)
    const ref = useRef<HTMLDialogElement>(null);

    const handleSubmit = async () => {
       
        
        if(
            reclamationImg.Gov_ID.image1 === '' ||
            reclamationImg.Gov_ID.image2 === '' ||
            reclamationImg.OR_CR.image1 === '' ||
            reclamationImg.OR_CR.image2 === '' ||
            reclamationImg.Ticket.image1 === '' ||
            reclamationImg.License.image1 === '' ||
            reclamationImg.License.image2 === ''
        ){
            if (!ref.current) return;
            ref.current.showModal();
        }
        
        try{
           
            const formData = new FormData();
            formData.append('Gov_ID_image1', reclamationImg.Gov_ID.image1);
            formData.append('Gov_ID_image2', reclamationImg.Gov_ID.image2);
            formData.append('OR_CR_image1', reclamationImg.OR_CR.image1);
            formData.append('OR_CR_image2', reclamationImg.OR_CR.image2);
            formData.append('Ticket_image1', reclamationImg.Ticket.image1);
            formData.append('License_image1', reclamationImg.License.image1);
            formData.append('License_image2', reclamationImg.License.image2);
           await submitForm(formData);
        }
        catch(err){
            console.log(err)
        }
        finally{
          
        }
    }
    
    return (
        <>
            <dialog ref={ref} 
                className='w-[40vw] h-[20vw] bg-[#c4c4c4] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-[1vw]'>
                <h1 className='text-[2vw]'>HELLO</h1>
              
            </dialog>
            <button className={`${className}`} onClick={handleSubmit}>Submit</button>
        </>
    );
};

export default Submit;