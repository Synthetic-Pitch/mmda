'use client'
import { useDispatch, useSelector } from "react-redux";
import {setGov_ID_Image1,setGov_ID_Image2,setOR_CR_Image1,setOR_CR_Image2,setTicket_Image1,setLicense_Image1,setLicense_Image2} from '@/app/redux/reclamation';

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

    // This Effect watches param and on Redux reclamationImg if it has a value then transfer it to ImgSrc
    useEffect(()=>{
        console.log(reclamationImg);
        
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

    const handleSubmit = async () => {
        
    }
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
    }

    return {
        handleSubmit,handleImage,reclamationImg,ImgSrc,isReclamation,hider
    }
};

export default UseSubmissionHook;