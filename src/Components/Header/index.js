import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
    return (
        <div className='Header'>
            <div className='nav-left-container'>
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
            </div>
            <div className='nav-right-container'>
                <p className='offer'>Offers</p>
                <button className='course-btn'>Courses</button>
            </div>

        </div>
    )
}

export default Header