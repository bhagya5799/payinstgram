import React from 'react'
import './index.css'

const data = [
    {
        image: 'https://res.cloudinary.com/bhagya/image/upload/v1693632515/avatar_rm6gr2.png',
        name: 'Jenny Wilson',
        descrption: 'Lorem ipsum dolor sit amet consectetur adipiscing...'
    },
    {
        image: 'https://res.cloudinary.com/bhagya/image/upload/v1693632515/avatar_1_czjzec.png',
        name: 'Jenny Wilson',
        descrption: 'Lorem ipsum dolor sit amet consectetur adipiscing...'
    },
    {
        image: 'https://res.cloudinary.com/bhagya/image/upload/v1693632515/avatar_2_q949pr.png',
        name: 'Jenny Wilson',
        descrption: 'Lorem ipsum dolor sit amet consectetur adipiscing...'
    },
]

const TropicalAdve = () => {
    return (
        <div className='TropicalAdve'>
            <div className='tropical-left'>
                {data.map((each, index) => (
                    <div className='card' key={index}>
                        <img src={each.image} alt={each.name} className='' />
                        <div className=''>
                            <h4>{each.name}</h4>
                            <p className='description'>{each.descrption}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='tropical-right'>
                
                <img  src='https://res.cloudinary.com/bhagya/image/upload/v1693638347/round_melmab.png' 
                className='bg-imge-round' alt='round' />
                {/* <img src='https://res.cloudinary.com/bhagya/image/upload/v1693675763/Ellipse_53_k60rey.png'  alt='off-moon'/> */}
                <h1 className='tropical-adv-title'>Tropical Adventure
                    <br /><span className='student'>For Students</span>
                </h1>
                <p className='tropy-vecation'>student Tropical Vecation : Relax and Recharge</p>

                <ul className='ul-list-items'>
                    <li>Lorem ipsum dolor sit amet </li>
                    <li>Massa quis natoque Sit quam </li> 
                    <li>Eros non pellentesque elit </li>
                    <li>totrtor id euismod habitant </li>
                    <li>totrtor id euismod habitant </li>
                    <li>sed suspendisse id in ultrices </li>
                </ul>
                <button className='explore-btn'>Explore More</button>
            </div>
        
        </div>
    )
}

export default TropicalAdve