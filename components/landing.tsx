"use Client"
import React from 'react'
import Sidebar from './sidebar';

function Landing() {
  return (
    <>
        <div className='bg-[#f6f6f8] rounded-[40px] w-[90vw] h-[90vh] flex flex-row justify-start'>
            <Sidebar></Sidebar>
        </div>
    </>
  )
}
export default Landing;