import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <dialog open id='loading' className='bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] back'>
        <div className='h-full w-full flex justify-center items-center'>
            <AiOutlineLoading size={90} className='animate-spin'/>
        </div>
    </dialog>
  )
}

export default Loading