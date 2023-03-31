import React from 'react';
import Logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <div className='py-12'>
        <div className='flex flex-col md:flex-row justify-between gap-12 '>
        <div className='flex flex-col gap-2'>
            <img src={Logo} alt="logo img" className='w-[250px]' />
            <p className='text-gray-400 pt-4'>A new way to make the payments easy, reliable and secure</p>
        </div >
        <div className='flex flex-col gap-2 text-white'>
            <h2 className='text-md font-bold'>Useful Links</h2>
            <a href="#">Content</a>
            <a href="#">How it Works</a>
            <a href="#">create Explore</a>
            <a href="#">Terms and Services</a>
        </div>
        <div className='flex flex-col gap-2 text-white'>
            <h2 className='text-md font-bold'>Community</h2>
            <a href="#">Partners</a>
            <a href="#">Suggestions</a>
            <a href="#">Blog</a>
            <a href="#">Newsletter</a>
        </div>
        <div className='flex flex-col gap-2 text-white'>
            <h2 className='text-md font-bold'>Partner</h2>
            <a href="#">Our Partner</a>
            <a href="#">Become a Partner</a>
        </div>
        </div>
    <p className='text-gray-400 text-center pt-24' >Copy and Copyright by @Alimisolution 2023. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
