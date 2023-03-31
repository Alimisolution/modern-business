import React from 'react';
import bannerImg from '../assets/robot.png'

const Banner = () => {
  return (
    <div className=' pt-24 lg:pb-2 flex flex-col md:flex-row gap-16' id='home'>
        <div className='text-white '>
            <div className='bg-gray-700 w-[100%] md:w-[10%]flex-row flex items-center justify-center'>
                <p className='ml-4 font-semi-bold'>20% <span className='text-gray-300'>Discount for </span>1 Month <span className='text-gray-300'>Account</span></p>
            </div>
                <h1 className='text-3xl lg:text-8xl font-bold pt-[2rem]'>The Next <span className='text-blue-300'>Generation</span> Payment Method.</h1>
                <p className='pt-[2rem] text-md lg:text-xl text-gray-300'>Our team of expert uses a methodology to identify the credit cards most likely 
                    to fit your needs. We examine annual persentage rate, annual fees.</p>
        </div>
        <img src={bannerImg} alt="banner img" className='w-[360px] lg:w-[600px]'/>
    </div>
  )
}

export default Banner
