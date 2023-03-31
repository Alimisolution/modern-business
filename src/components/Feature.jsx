import React from 'react';
import bill from '../assets/bill.png'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'


const Feature = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center text-white gap-16 py-16' id='feature'>
      <img src={bill} alt="bill img"  className='md:w-[400px] lg:w-[650px] '/>
      <div className='ml-0 lg:ml-24'>
        <h1 className='text-3xl lg:text-5xl font-bold'>Easily control your  billing & invoicing</h1>
        <p className='text-gray-400 text-lg my-[2rem]'  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ad enim eligendi non, dolore perspiciatis?</p>
        <div className='flex gap-6'>
            <img src={apple} alt="app-store img" />
            <img src={google} alt="Google-store img" />
        </div>
      </div>
    </div>
  )
}

export default Feature
