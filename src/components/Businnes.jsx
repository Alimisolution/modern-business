import React from 'react';
import start from "../assets/Star.svg"
import send from "../assets/Send.svg"
import shield from "../assets/Shield.svg"

const Businnes = () => {
  return (
    <div className='pt-12 pb-12 md:py-24  text-white flex flex-col md:flex-row items-center justify-between gap-12'>
      <div>
        <h1 className='text-3xl md:text-4xl font-bold mb-6'>You do the business, we'll handke the money</h1>
        <p className='text-lg text-gray-400 mb-12'>With the right credit card, you can improve  your financial  life by building <br /> credit, 
            earning rewars and saving money  but with hundreds fo credit cards on the market</p>
          <a href="#" className='text-white  bg-blue-500 font-bold rounded-md  py-3 px-6 '>Get Started</a>
      </div>
      <div>
        <div className='flex flex-row items-center mb-4 px-0 py-6 md:p-6 rounded-2xl hover:bg-gray-800'>
            <img src={start} alt="start img" className='bg-gray-800 p-3 rounded-full'/>
            <div className='ml-4'>
                <h2 className='text-xl font-bold'>Rewards</h2>
                <p>The best credit card offer some tantalizing combinations of promotions and prizes</p>
            </div>
        </div>
        <div className='flex flex-row items-center mb-4 px-0 py-6 md:p-6 rounded-2xl hover:bg-gray-800'>
            <img src={shield} alt="start img" className='bg-gray-800 p-3 rounded-full'/>
            <div className='ml-4'>
                <h2 className='text-xl font-bold'>100% Secured</h2>
                <p>We take proactive steps make sure your information and transaction are secure</p>
            </div>
        </div>
        <div className='flex flex-row items-center mb-4 px-0 py-6 md:p-6 rounded-2xl hover:bg-gray-800'>
            <img src={send} alt="start img" className='bg-gray-800 p-3 rounded-full'/>
            <div className='ml-4'>
                <h2 className='text-xl font-bold'>Balance Transfer</h2>
                <p> A balance transfer credit card can save you alot of money in insterest charges</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Businnes
