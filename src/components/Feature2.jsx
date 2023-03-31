import React from 'react';
import card from '../assets/card.png'


const Feature = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center text-white gap-16 py-16' id='product'>
      <div>
        <h1 className='text-3xl lg:text-5xl font-bold lines-height'>Find a better card deal in few steps</h1>
        <p className='text-gray-400 text-lg my-[2rem]'  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ad enim eligendi non, dolore perspiciatis?</p>
        <a href="#" className='text-white  bg-blue-500 font-bold rounded-md  py-3 px-6 '>Get Started</a>
      </div>
      <img src={card} alt="card img"  className='md:w-[350px] lg:w-[600px] ml-0 md:ml-12'/>
    </div>
  )
}

export default Feature
