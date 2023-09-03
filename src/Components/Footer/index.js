import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='student-special-title'>
            Student Special: Discounted rates <br/> on TropicalgetWays!
        </h1>
        <p className='footer-description'>Let's embody your beautiful ideas together,simplify the  <br/>way you visualize your next things.</p>
        <div className='footer-items'>
            <p>Privacy policy</p>
              <p>Terms of Use</p>
              <p>Sales and Refounds</p>
              <p>legal</p>
              <div className='nav-left-containerr'>
                
                  <Link className='link'>
                      <p>Home</p>
                  </Link>
                  <Link className='link'>
                      <p>About</p>
                  </Link>
                  <Link className='link'>
                      <p>Shedules</p>
                  </Link>
                  <Link className='link'>
                      <p>MemberShip</p>
                  </Link>
                  <Link className='link'>
                      <p>Pricing</p>
                  </Link>
                  <p>|</p>
              </div>
        </div>
    </div>
  )
}

export default Footer