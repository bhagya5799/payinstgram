import React from 'react'
import Header from '../Header'
import './index.css'
import TropicalAdve from '../TropicalAdve'
import Destination from '../Destination'
import StudentDiscount from '../StudentDiscount'
import BookNow from '../BookNow'
import Testimonials from '../Testimonials'
import Footer from '../Footer'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <div className='container'>
        <div className='container-left'>
          <img src='https://res.cloudinary.com/bhagya/image/upload/v1693675763/Ellipse_53_k60rey.png' alt='off-moon'  width={70}/>
          <h1 className='discovery-beauty'>Discover the beauty of the tropics</h1>
          <h1 className='heading-left'>Tropical  Destinations <span className='for-student'>for Student</span></h1>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
          <button className='signup-btn'>SiGN &nbsp; UP</button>
        </div>
        
        <img className='image-boy' src="https://res.cloudinary.com/bhagya/image/upload/v1693630188/boy-1_y3bowr.png" alt='boy' />
      </div>
      <TropicalAdve />
      <Destination />
      <StudentDiscount />
      <BookNow />
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home