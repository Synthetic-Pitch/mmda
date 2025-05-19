import React, { Dispatch, SetStateAction } from 'react'

type Props ={
  setFailedModal: Dispatch<SetStateAction<boolean>>
}
const FailedModal = ({setFailedModal}:Props) => {
  console.log('FailedModal');
  
  return (
    <dialog open className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[20vw] bg-[#c8c8c8]  flex flex-col justify-evenly select-none'>
      <h2 className='font-mono text-[1.5vw] px-[2vw]'>Please submit all requirements</h2>
      <div className='flex justify-end px-[4vw]'>
        <button onClick={()=>setFailedModal(false)} className='text-[1.5vw] font-mono bg-[#a8a8a8] px-[1.5vw] py-[.5vw] cursor-pointer'>okay</button>
      </div>
    </dialog>
  )
}

export default FailedModal