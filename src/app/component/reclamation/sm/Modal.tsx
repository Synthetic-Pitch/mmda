'use client'
import React, { useEffect, useRef, Dispatch, SetStateAction, useState } from 'react';
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { reset } from "@/app/redux/reclamation";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

interface ModalProps {
    transasctionHashID: string;
    isModal:boolean;
    setModal:Dispatch<SetStateAction<boolean>>
}

const Modal = ({ transasctionHashID,isModal,setModal }: ModalProps) => {
    const ref = useRef<HTMLDialogElement>(null);
    const [qrCode, setQrCode] = useState<string>('');
    const ref2 = useRef<HTMLDivElement>(null);
    const dispatch=useDispatch();
    const router = useRouter();

    useEffect(()=>{
        if(!ref.current)return;
        ref.current.showModal();
    },[isModal])
    
    useEffect(()=>{
        setQrCode(transasctionHashID);
    },[])
    const handleDownloadasPDF = async () =>{
        if(!ref.current)return;
    
        const element =ref.current
        const canvas = await html2canvas(element);
        const imgData =canvas.toDataURL("image/png");
        const pdf = new jsPDF("p","mm","a4")

        const imgWidth = 86.44;
        const imgHeight = 44.18;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('mmda-recipt.pdf');
    }

    const handleFisnish =()=>{
        dispatch(reset())
        setModal(!isModal);
        router.push('/home');
    }

    return (
        <dialog ref={ref} className='absolute h-full w-full bg-transparent left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
            <main className='h-full w-full flex justify-center items-center'>
                <div ref={ref2} className='bg-[#e2e2e2] w-[90%] py-8 px-2 flex flex-col gap-8 items-center'>
                    {transasctionHashID === '' ? (
                        <>
                            <p className='font-mono '>Please submit all requirements</p>
                            <button 
                                className='font-mono flex justify-end w-full px-20'>
                                <span className='bg-[#bebebe] px-8' onClick={()=>setModal(!isModal)} >Okay</span>
                            </button>
                        </>
                    )
                    :
                    (
                        <>
                            <p className='text-center font-mono text-[12px]'>Screenshot or download this recipt and show it to the courier.</p>
                            {
                                qrCode !== '' &&
                                <QRCodeCanvas
                                    value={qrCode}
                                    bgColor="#ffffff"
                                    fgColor="#333333"
                                    level="H"
                                    size={Math.min(window.innerWidth * 0.45, window.innerHeight * 0.20)} // 15vw or 15vh
                                />
                            }
                            <aside></aside>
                            <div className='flex flex-col font-mono gap-4'>
                                <button className='bg-[#bdbcbc] px-3 py-2' onClick={handleDownloadasPDF}>download</button>
                                <button 
                                    className='bg-[#bdbcbc] px-2 py-2'
                                    onClick={handleFisnish}
                                    >done
                                </button>
                            </div>
                        </>
                    )
                }
                    
                </div>
            </main>
        </dialog>
    );
};

export default Modal;