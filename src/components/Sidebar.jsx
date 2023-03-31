import React from 'react';
import { useGlobalContext } from '../Context';

const Sidebae = () => {
  const {show,closeSidebar} = useGlobalContext()
  return (
    <div className={`${show ? 'sidebar shows' : 'hide'}`}>
      <div className='sidebar-inner'>
        <button className='close' onClick={closeSidebar}>
        &#215;
        </button>
      <div className='navs'>
          <a onClick={closeSidebar} href="#home">Home</a>
          <a onClick={closeSidebar} href="#feature">Features</a>
          <a onClick={closeSidebar} href="#product">Product</a>
          <a onClick={closeSidebar} href="#client">Clients</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebae
