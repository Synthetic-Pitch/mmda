'use client'
// import { createHash } from "crypto"; // Remove this line, not browser-compatible
import { QRCodeCanvas } from "qrcode.react";
import React, { useEffect, useRef, useState } from 'react'
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";

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
  useEffect(()=>{
    setQrCode(transasctionHashID);
    console.log(reclamationData);
  },[]);

  // Basically this is a hash generator
  // It generates a random hash using the crypto API
  const generateHash = () => { 
    const array = new Uint8Array(32);
    window.crypto.getRandomValues(array);
    const randomData = Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
    const timestamp = Date.now().toString();
    const data = randomData + timestamp;
    return data;
  }
  
  const handleDownloadasPDF = async () =>{
    if(!ref.current)return;
 
    const element =ref.current
    const canvas = await html2canvas(element);
    const imgData =canvas.toDataURL("image/png");
    const pdf = new jsPDF("p","mm","a4")

    const imgWidth =210;

    const imgHeight =(canvas.height * imgWidth) / canvas.width;

    let position = 0;
    pdf.addImage(imgData,"PNG",0,position,imgWidth,imgHeight);
    pdf.save("document.pdf")

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
        <button className="bg-[#9a9a9a] text-[1.4vw] px-[2%] cursor-pointer select-none">done</button>
      </div>
    </dialog>

  )
}

export default SuccessModal;