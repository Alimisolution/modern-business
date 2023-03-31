import React from 'react';
import Logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
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
        <button className="text-white block lg:hidden cursor-pointer" id='bars' onClick={openSidebar}>
          <img src={menu} alt="menu img" />
        </button>
      </nav>
     

    </div>
  )
}

export default Navbar
