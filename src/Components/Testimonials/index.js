import React from 'react'
import './index.css'

const data=[
    {
        image:'https://res.cloudinary.com/bhagya/image/upload/v1693718318/Ellipse_1_1_v3jcwg.png',
        name:'Corey Korsgaard',
        description:'it is a long established fact that a reader will be distracted by the readble content of a page when looking at this layout'
    },
    {
        image: 'https://res.cloudinary.com/bhagya/image/upload/v1693718318/Frame_6_u6lovd.png',
        name: 'Jakob Aminoff',
        description: 'it is a long established fact that a reader will be distracted by the readble content of a page when looking at this layout'
    },
    {
        image: 'https://res.cloudinary.com/bhagya/image/upload/v1693718317/Frame_6_1_z23wfd.png',
        name: 'Carla Press',
        description: 'it is a long established fact that a reader will be distracted by the readble content of a page when looking at this layout'
    }
]
const Testimonials = () => {
    return (
        <div className='testimonials'>
            <h1 className='testimonials-title'>Testimonials</h1>
            <div className='testimonials-container'>
                {data.map((each,index)=>(
                    <div className='testimonial-card' key={index}>
                        <img src={each.image} width={100} alt={each.name} />
                        <h3 className='name'>{each.name}</h3>
                        <hr className='line' />
                        <p className='descr'>{each?.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Testimonials
