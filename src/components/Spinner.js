import React from 'react'
import "./Spinner.css"
export default function Spinner() {
  return (
    <div className='flex justify-center items-center h-[90vh] flex-col'>
        <div className='spinner'></div>
        <p className='text-bgDark text-xl font-semibold'>Loading...</p>

    </div>
  )
}
