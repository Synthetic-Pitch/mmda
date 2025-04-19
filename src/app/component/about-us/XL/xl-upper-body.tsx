"use client";
import React from "react";
import Image from "next/image";
import Img1 from "../../../../../public/assets/images/mmda-oagmo-a.png";
import Img2 from "../../../../../public/assets/images/Rectangle 20.png";
import Img3 from "../../../../../public/assets/images/Rectangle 19.png";

const XlUpperBody = () => {
  
  return (
    
    <div className="flex-grow flex bg-[#94A6FF] flex-col items-center justify-center">
      <header className="w-full max-w-[1500px] h-[15%] flex justify-center items-center">
        <h2 className="font-lakki text-6xl select-none">ABOUT US</h2>
      </header>

      <main className="flex-grow w-full max-w-[1500px] flex">
        <section className="w-[50%] h-full flex justify-center items-center">
          <div className="w-[60%] h-[60%] -mr-[20%] -mt-[15%] relative">
            <Image src={Img1} alt="" fill className="object-cover rounded-br-[4rem] shadow-[0px_15px_20px_1px_black] z-10"/>
            <Image src={Img2} alt="" className="object-contain -top-16 -left-20 z-10 absolute" height={160} width={160}/>
          </div>
        </section>

        <section className="w-[50%] h-full flex justify-center items-center relative">
          <Image src={Img3} alt="" className="absolute -top-20 right-10" height={220} width={160}/>
          <div className="w-[60%] h-[60%] mr-[20%] -mt-[15%] font-poppins text-[1.2em] text-white">
            The Metropolitan Manila Development Authority (MMDA) is responsible for managing traffic regulations, public safety, and urban planning in Metro Manila. Our goal is to ensure smooth traffic flow and enforce road safety rules.
          </div>
        </section>
      </main>
    </div>
  );
};

export default XlUpperBody;
