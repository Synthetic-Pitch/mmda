import Link from 'next/link'
import React from 'react'

const RouteNotfound = () => {
  return (
    <div>
        <h1 className='text-3xl font-poppins font-bold'>PAGE 404 NOT FOUND</h1>
        <Link href="/home" className='underline'>Go back</Link>
    </div>
  )
}

export default RouteNotfound