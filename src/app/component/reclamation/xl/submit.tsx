'use client'
import React, { useState } from 'react';
import { submitForm } from '@/app/action/sumitform';
import { useSelector } from 'react-redux';

import FailedModal from './failedModal';
import SuccessModal from './successModal';

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
    const [successModal, setSuccessModal] = useState(false);
    const [failedModal, setFailedModal] = useState(false);
    const [transasctionHashID, setTransactionHashID] = useState('');

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
            setFailedModal(true);
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
            
            const result = await submitForm(formData);  
            if(result.success){
                setSuccessModal(true);
                setTransactionHashID(result.transactionHash ?? '');
            }else{
                console.log('Failed');
            } 
        }
        catch(err){
            console.log(err)
        }
        
    }
    
    return (
        <>
           {
                successModal && <SuccessModal transasctionHashID={transasctionHashID}/>
           }

           {
                failedModal && <FailedModal/>
           }
            <button className={`${className}`} onClick={handleSubmit} disabled={successModal}>Submit</button>
        </>
    );
};

export default Submit;