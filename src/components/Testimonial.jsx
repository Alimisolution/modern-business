import React from 'react';
import quote from '../assets/quotes.svg'
import people from '../assets/people1.png'
import people2 from '../assets/people2.png'
import people3 from '../assets/people3.png'
import airbnb from '../assets/airbnb.png'
import binance from '../assets/binance.png'
import coinbase from '../assets/coinbase.png'
import dropbox from '../assets/dropbox.png'

const Testimonial = () => {
  return (
    <div className='pt-8 pb-4'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12' id='client'>
        <h1 className='text-3xl lg:text-5xl font-bold text-white'>What people are saying about us</h1>
        <p className='text-gray-400 text-lg md:text-xl ml-0 lg:ml-16'>Every you need to accept card payments and grow 
        your business everywhere on planet.</p>
      </div>
      <div className='flex flex-col md:flex-row justify-start items-center gap-0 md:gap-12 '>
        
        <div className='mt-24 hover:bg-gray-800 p-6 rounded-2xl'>
            <img src={quote} alt="quote img" className='mb-6'/>
            <p className='text-white text-md'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver </p>
            <div className='flex justify-start items-center p-8'>
                <img src={people} alt="people1 img" className='w-[60px] -ml-8'  />
                <div className='ml-4'>
                    <h2 className='text-md font-bold text-white'>Herman Jensen</h2>
                    <p className='text-gray-400'>Founder & Leader</p>
                </div>
            </div>
        </div>
        <div className='mt-24 hover:bg-gray-800 p-6 rounded-2xl'>
            <img src={quote} alt="quote img" className='mb-6'/>
            <p className='text-white text-md'>Money is makes your life easier, if you're lucky to have it, you're lucky </p>
            <div className='flex justify-start items-center p-8'>
                <img src={people2} alt="people1 img" className='w-[60px] -ml-8'  />
                <div className='ml-4'>
                    <h2 className='text-md font-bold text-white'>Steven Mark</h2>
                    <p className='text-gray-400'>Founder & Leader</p>
                </div>
            </div>
        </div>
        <div className='mt-24 hover:bg-gray-800 p-6 rounded-2xl'>
            <img src={quote} alt="quote img" className='mb-6'/>
            <p className='text-white text-md'>Is is usually prople in the money business, financial and international trade that are really rcih  </p>
            <div className='flex justify-start items-center p-8'>
                <img src={people3} alt="people1 img" className='w-[60px] -ml-8'  />
                <div className='ml-4'>
                    <h2 className='text-md font-bold text-white'>Kenn Gallagher</h2>
                    <p className='text-gray-400'>Founder & Leader</p>
                </div>
            </div>
        </div>
    </div>
    <div className='flex flex-col md:flex-row items-center justify-between pt-16 gap-8'>
        <img src={airbnb} alt="airbnb img"  className='w-[200px] md:w-[150px] xl:w-[170px]'/>
        <img src={binance} alt="binance img"  className='w-[200px] md:w-[150px] xl:w-[170px]'/>
        <img src={coinbase} alt="coinbase img"  className='w-[200px] md:w-[150px] xl:w-[170px]'/>
        <img src={dropbox} alt="dropbox img"  className='w-[200px] md:w-[150px] xl:w-[170px]'/>
    </div>
    </div>
  )
}

export default Testimonial
