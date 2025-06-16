'use client'
import { useDispatch, useSelector } from "react-redux";
import {setGov_ID_Image1,setGov_ID_Image2,setOR_CR_Image1,setOR_CR_Image2,setTicket_Image1,setLicense_Image1,setLicense_Image2} from '@/app/redux/reclamation';
import { submitForm } from '@/app/action/sumitform';
//import { submitForm } from '@/app/action/sumitform';
import { useEffect, useState } from "react";

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

const UseSubmissionHook = (param:number) => {
    const reclamationImg = useSelector((state:State)=> state.reclamationSlice);
    const reclamation = useSelector((state:State)=>state.reclamationSlice);
    const dispatch = useDispatch();
    const [isReclamation,setIsReclamaion] = useState(false);
    const [ImgSrc,setImgSrc] = useState({
        img1:'',
        img2:''
    });
    const [hider,setHider] = useState(false);
    const [loading,setLoading] = useState(false);
    const [isModal, setModal] = useState(false);
    const [transasctionHashID, setTransactionHashID] = useState('');
    // This Effect watches param and on Redux reclamationImg if it has a value then transfer it to ImgSrc
    useEffect(()=>{
        switch(param) {
            case 1 :
                    setIsReclamaion(false);
                    if(reclamationImg.Gov_ID.image1 !== ''){
                        setImgSrc(prev=>({...prev,img1:reclamationImg.Gov_ID.image1}));
                        setIsReclamaion(true);
                    }
                    if(reclamation.Gov_ID.image2 !== ''){
                        setImgSrc(prev=>({...prev,img2:reclamationImg.Gov_ID.image2}))
                        setIsReclamaion(true)
                    }
                break;
            case 2 :
                    setIsReclamaion(false);
                    if(reclamationImg.OR_CR.image1 !== ''){
                        setImgSrc(prev=>({...prev,img1:reclamationImg.OR_CR.image1}));
                        setIsReclamaion(true);
                    }
                    if(reclamation.OR_CR.image2 !== ''){
                        setImgSrc(prev=>({...prev,img2:reclamationImg.OR_CR.image2}));
                        setIsReclamaion(true);
                    }
                break;
            case 3 :
                    setIsReclamaion(false);
                    if(reclamationImg.Ticket.image1 !== ''){
                        setImgSrc(prev=>({...prev,img1:reclamationImg.Ticket.image1}));
                        setIsReclamaion(true);
                        setHider(true);
                    }
                break;
            case 4 :
                    setIsReclamaion(false);
                    if(reclamationImg.License.image1 !== ''){
                        setImgSrc(prev=>({...prev,img1:reclamationImg.License.image1}));
                        setIsReclamaion(true);
                    }
                    if(reclamationImg.License.image2 !== ''){
                        setImgSrc(prev=>({...prev,img2:reclamationImg.License.image2}));
                        setIsReclamaion(true);
                    }
                break;
        }               
    },[reclamationImg]);

    // handle submit the user input
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
            setModal(!isModal);
            return;
        }
        
        try{
            setLoading(true)
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
                setModal(true);
                setTransactionHashID(result.transactionHash ?? '');
            }else{
                console.log('Failed');
            } 
        }catch(err){
            console.error(err);
        }
        finally{
            setLoading(false)
        }
    }

  
    const handleDelete = ({ a, b }: { a: any; b: any }) => {
        console.log(a, b);
        if (b === ImgSrc.img1) {
            setImgSrc(prev => ({ ...prev, img1: '' }));
            
            switch (a) {
                case 1:
                    dispatch(setGov_ID_Image1(''));
                    break;
                case 2:
                    dispatch(setOR_CR_Image1(''));
                    break;
                case 3:
                    dispatch(setTicket_Image1(''));
                    break;
                case 4:
                    dispatch(setLicense_Image1(''));
                    break;
            }
        }

        if (b === ImgSrc.img2) {
            setImgSrc(prev => ({ ...prev, img2: '' }));

            switch (a) {
                case 1:
                    dispatch(setGov_ID_Image2(''));
                    break;
                case 2:
                    dispatch(setOR_CR_Image2(''));
                    break;
                case 4:
                    dispatch(setLicense_Image2(''));
                    break;
            }
        }
    };

    // Handle User imoported image and dispatch as Redux
    const handleImage = (e: React.ChangeEvent<HTMLInputElement>,param:number) => {
        if(!e.target || e.target.files === null || e.target.files === null) return;

        switch(true){
            case param === 1:
                if(reclamation.Gov_ID.image1 === ''){
                    dispatch(setGov_ID_Image1(URL.createObjectURL(e.target.files[0])));
                }else if(reclamation.Gov_ID.image2 === ''){
                    dispatch(setGov_ID_Image2(URL.createObjectURL(e.target.files[0])));
                }
                else return;
                break;
            case param === 2:
                if(reclamation.OR_CR.image1 === ''){
                    dispatch(setOR_CR_Image1(URL.createObjectURL(e.target.files[0])));
                }else if(reclamation.OR_CR.image2 === ''){
                    dispatch(setOR_CR_Image2(URL.createObjectURL(e.target.files[0])));
                }
                else return;
                break;
            case param === 3:
                if(reclamation.Ticket.image1 === ''){
                    dispatch(setTicket_Image1(URL.createObjectURL(e.target.files[0])));
                }
                else return;
                break;
            case param === 4:
                if(reclamation.License.image1 === ''){
                    dispatch(setLicense_Image1(URL.createObjectURL(e.target.files[0])));
                }else if(reclamation.License.image2 === ''){
                    dispatch(setLicense_Image2(URL.createObjectURL(e.target.files[0])));
                }
                else return;
                break;
            default:
        }
    };
    
    return {
        handleSubmit,handleImage,reclamationImg,ImgSrc,isReclamation,
        hider,handleDelete,loading,isModal,setModal,transasctionHashID
    }
};

export default UseSubmissionHook;