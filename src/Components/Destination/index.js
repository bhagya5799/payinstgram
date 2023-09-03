import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import './index.css'

const data = [
    {
        image: 'https://res.cloudinary.com/bhagya/image/upload/v1693660258/card-image_2_extmyl.png',
        name: 'HardVerd University',
        place: 'Cambridge,Massachusetts,UK'

    },
    {
        image: 'https://res.cloudinary.com/bhagya/image/upload/v1693660258/card-image_3_gkgdis.png',
        name: 'Oxford University',
        place: 'Oxford , England'
    },
    {
        image: 'https://res.cloudinary.com/bhagya/image/upload/v1693660258/card-image_1_jg9mhx.png',
        name: 'stanford University',
        place: 'Stanford,Cailfornia'
    },
    {
        image: 'https://res.cloudinary.com/bhagya/image/upload/v1693660750/card-image_5_sozfkz.png',
        name: 'Nanyang Technology',
        place: 'Nanyang Ave, Singapura'
    },
    // {
    //     image: 'https://res.cloudinary.com/bhagya/image/upload/v1693660750/card-image_5_sozfkz.png',
    //     name: 'Nanyang Technology',
    //     place: 'Nanyang Ave, Singapura'
    // },
]

const Destination = () => {
    return (
        <div className='destination'>
            <h1>Our Destinations</h1>
            <div className='university-card'>
                {data.map((each, index) => (
                    <div className='card-destion-image' key={index}>
                        <img src={each.image} className='image-unversity' alt={each.name} />
                        <h1 className='unversity-name'>{each.name}</h1>
                        <div className='university-details'>
                            <h5 className='university-location'>{each.place} </h5>
                            <span className='dots-icon'><BsThreeDots /></span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='arrow-icon-container'>
                <i className='arrow'><AiOutlineArrowLeft  /></i>
                <i className='nbr'>1/4</i>
                <i className='arrow-right'><AiOutlineArrowRight className='arrow' /></i>
            </div>

        </div>
    )
}

export default Destination