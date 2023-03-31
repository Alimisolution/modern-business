import React from 'react'

const CTA = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between rounded-xl  py-12 px-16 mt-12 mb-24 gap-8 bg-gray-800'>
      <div>
        <h1 className='text-3xl lg:text-5xl text-white font-bold'>Let's try our services now!</h1>
        <p className='text-gray-400 text-lg pt-8'>Every you need to accept card payments and  <br /> grow 
        your business everywhere on planet.</p>
      </div>
      <a href="#" className='text-white  bg-blue-500 font-bold rounded-md  py-3 px-6 hover:bg-gray-400'>Get Started</a>
    </div>
  )
}

export default CTA
