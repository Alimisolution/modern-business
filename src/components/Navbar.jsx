import React, {useState} from 'react';
import Logo from '../assets/logo.svg';
import {FaBars} from 'react-icons/fa';
import { useGlobalContext } from '../Context';

const Navbar = () => {
const {openSidebar} = useGlobalContext()


  return (
    <div >
      <nav className='py-6 flex flex-row items-center justify-between'>
        <img src={Logo} alt="logo" className='w-[130px] lg:w-[170px]'/>
        <div className='text-white text-lg font-semi-bold hidden lg:block'>
          <a href="#home" className='mr-[2rem] hover:text-green-300'>Home</a>
          <a href="#feature" className='mr-[2rem] hover:text-green-300'>Features</a>
          <a href="#product" className='mr-[2rem] hover:text-green-300'>Product</a>
          <a href="#client" className='hover:text-green-300'>Clients</a>
        </div>
      <FaBars size={30} className="text-white block lg:hidden cursor-pointer" onClick={openSidebar}/>
      </nav>
     

    </div>
  )
}

export default Navbar
