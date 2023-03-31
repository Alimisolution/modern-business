import React from 'react'

const BannerAmt = () => {
  return (
    <div className='mb-8 text-white flex flex-col md:flex-row gap-8 justify-between items-center mt-24'>
      <div className='flex flex-row items-center'>
        <h1 className='font-bold text-[1.5rem] text'>3900+</h1>
        <p className='text-gray-300 text-lg font-bold ml-4'>USER ACTIVE</p>
      </div>

      <div className='flex flex-row items-center'>
        <h1 className='font-bold text-[1.5rem] text'>3230+</h1>
        <p className='text-gray-300 text-lg font-bold ml-4'>TRUSTED BY COMPANY</p>
      </div>

      <div className='flex flex-row items-center'>
        <h1 className='font-bold text-[1.5rem] text'>  $3230M+</h1>
        <p className='text-gray-300 text-lg font-bold ml-4'>TRANSACTION</p>
      </div>
    </div>
  )
}

export default BannerAmt
