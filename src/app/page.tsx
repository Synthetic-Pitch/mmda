'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [font, setFont] = useState('lakki');

  const fontsArr = [
    'lakki',
    'poppins',
    'koulen',
    'Big-Shoulders-Display'
  ];

  useEffect(() => {
    // let index = 0; // Track current index

    // const interval = setInterval(() => {
    //   setFont(fontsArr[index]); // Update font

    //   index = (index + 1) % fontsArr.length; // Cycle through fonts
    // }, 1000); // Change every 1 second

    // return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  
  return ( 
    <div className={`font-${fontsArr[2]} text-9xl bg-skyline transition-all duration-500`}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores aut, neque facilis voluptatum cupiditate quis animi consequuntur hic illo at impedit quos inventore illum sequi velit. Nobis, amet ut.
    </div>
  );
}
