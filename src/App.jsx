import React from 'react'
import Banner from './components/Banner'
import BannerAmt from './components/BannerAmt'
import Businnes from './components/Businnes'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Feature2 from './components/Feature2'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <div className='container mx-auto px-8  xl:pl-24 xl:pr-48'>
      <Navbar/>
      <Sidebar/>
      <Banner/>
      <BannerAmt/>
      <Businnes/>
      <Feature/>
      <Feature2/>
      <Testimonial/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App
