import React from 'react'
import Condition from './condition'

const Login = () => {
  return (
    <div 
        className='absolute top-[25%] left-1/2 -translate-x-1/2 h-[60%] w-[60vw] max-w-[400px] bg-[rgb(217,217,217,.8)] z-50 rounded-[4vw]'>
          <main className='h-full w-full flex flex-col justify-center items-center gap-6 relative'>
            <Condition/>
          </main>
    </div>
  )
}

export default Login