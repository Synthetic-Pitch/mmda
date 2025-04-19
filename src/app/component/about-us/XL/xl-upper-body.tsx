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
        <section className="w-[50%] h-full flex justify-center items-center bg-[pink]">
          <div className="w-[70%] h-[70%] -mr-[20%] bg-[red]">asd</div>
        </section>
        <section className="w-[50%] h-full flex justify-center items-center bg-[#493135]">
          <div className="w-[70%] h-[70%] -mr-[20%] bg-[red]">asd</div>
        </section>
      </main>
    </div>
  );
};

export default XlUpperBody;
