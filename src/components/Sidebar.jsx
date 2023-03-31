import React from 'react';
import {FaTimes} from 'react-icons/fa';
import { useGlobalContext } from '../Context';

const Sidebae = () => {
  const {show,closeSidebar} = useGlobalContext()
  return (
    <div className={`${show ? 'sidebar shows' : 'hide'}`}>
      <div className='sidebar-inner'>
        <FaTimes size={25} className='close' onClick={closeSidebar}/>
      <div className='navs'>
          <a onClick={closeSidebar} href="#home">Home</a>
          <a onClick={closeSidebar} href="#feature">Features</a>
          <a onClick={closeSidebar} href="#product">Product</a>
          <a onClick={closeSidebar} href="#client">Client</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebae
