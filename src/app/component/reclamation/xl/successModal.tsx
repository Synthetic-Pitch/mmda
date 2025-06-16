'use client'
// import { createHash } from "crypto"; // Remove this line, not browser-compatible
import { QRCodeCanvas } from "qrcode.react";
import React, { useEffect, useRef, useState } from 'react'
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { reset } from "@/app/redux/reclamation";

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

type Props = {
  transasctionHashID:string
}

const SuccessModal: React.FC<Props> = ({transasctionHashID}) => {
  const [qrCode, setQrCode] = useState<string>('');
  const reclamationData = useSelector((state:State)=>state.reclamationSlice);
  const ref = useRef(null);
  const route = useRouter();
  const dispatch = useDispatch()
  

  
  useEffect(()=>{
    setQrCode(transasctionHashID);
    console.log(reclamationData);
  },[]);

  
  const handleDownloadasPDF = async () =>{
    if(!ref.current)return;
    
    const element =ref.current
    const canvas = await html2canvas(element);
    const imgData =canvas.toDataURL("image/png");
    const pdf = new jsPDF("p","mm","a4")

    const imgWidth = 44.44;
    const imgHeight = 86.18;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('mmda-recipt.pdf');
  }

  const handleDone = () =>{
    dispatch(reset());
    route.push('/home')
  }


  return (
    <dialog open className='h-[30vw] w-[40vw] bg-[#d2d2d2] p-[2vw] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-[1.5vw]' draggable='false'>
      <h2 className='text-center text-[.8vw] font-bold select-none' >
        Screenshot or download this recipt and show it to the courier.
      </h2>

      <main ref={ref} className="h-[70%] w-full flex items-center justify-center gap-[6%] border-[.1vw] border-black">
        {qrCode !== '' && (
          <QRCodeCanvas
            value={qrCode}
            bgColor="#ffffff"
            fgColor="#333333"
            level="H"
            size={Math.min(window.innerWidth * 0.15, window.innerHeight * 0.15)} // 15vw or 15vh
          />
        )}
        <figure className="flex flex-col">
          <span className="font-poppins">User-ID :{Math.floor(Math.random()*200000)+1}</span>
          <span className="font-poppins text-[14px]">mmda-agency</span>
        </figure>
      </main>

      <div className="w-full flex justify-end py-[2%]">
        <button onClick={handleDownloadasPDF} className="bg-[#9a9a9a] text-[1.4vw] px-[2%] cursor-pointer select-none">download recipt</button>
      </div>

       <div className="w-full flex justify-end">
        <button onClick={handleDone} className="bg-[#9a9a9a] text-[1.4vw] px-[2%] cursor-pointer select-none">done</button>
      </div>
    </dialog>

  )
}

export default SuccessModal;