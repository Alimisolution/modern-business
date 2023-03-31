import React from 'react';
import Logo from '../assets/logo.svg';
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'

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
        <div className='w-full bg-gray-500 mt-12 footer-line'></div>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 pt-12'>
            <p className='text-gray-400 text-center' >Copy and Copyright by @Alimisolution 2023. All Rights Reserved.</p>
            <div className='flex flex-row items-center justify-center gap-6'>
                <img src={facebook} alt="facebook img" className='cursor-pointer' />
                <img src={linkedin} alt="linkedin img" className='cursor-pointer' />
                <img src={twitter} alt="twitter img" className='cursor-pointer' />
                <img src={instagram} alt="instagram img" className='cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Footer
