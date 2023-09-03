import React, { useState } from 'react'
import './index.css'

const BookNow = () => {
    let [count,setCount]=useState(0)

    const submitform =(e)=>{
        e.preventDefault()

    }

    const clickAdd =()=>{
        if (count>=0){
            setCount(count=count+1)
        }
    }
    const clickSub = () => {
        if (count > 0) {
            setCount(count = count -1)
        }
    }
    return (
        <div className='booknow'>
            <img src='https://res.cloudinary.com/bhagya/image/upload/v1693676009/Group_167_pe7lpx.png' alt='girl' />
            <img src='https://res.cloudinary.com/bhagya/image/upload/v1693674093/Subtract_4_owy86y.png' alt='round' width='100px' height='100px' />
            <div className='form'>
                <h1>Book Now</h1>
                <p className='booknow-descrp'>Lorem ipsum, or lipsum as it is sometimes known</p>
                <form onSubmit={submitform} >
                    <label htmlFor='city' className='label'>City</label>
                    <br />
                    <input type='text' id='city' placeholder='placeholder' /><br />
                    <div className='arrival-departure'>
                        <div>
                            <label htmlFor='arrival' className='label'>ARRIVAL</label>
                            <input type='text' id='arrival' placeholder='10 October' />
                        </div>
                        <div>
                            <label htmlFor='dEPARTURE' className='label'>DEPARTURE</label>
                            <input type='text' id='dEPARTURE' placeholder='11 october' />
                        </div>
                    </div>
                    <div className='arrival-departure'>
                        <div>
                            <label htmlFor='star' className='label'>STAR</label>
                            <input type='text' id='star' placeholder='10 October' />
                        </div>
                        <div className=''>
                            <label htmlFor='room' className='label'>ROOM</label>
                            <br />
                            <div className='btn-card'>
                                <button className='add' onClick={clickAdd}>+</button>
                                <button className='count' >{count}</button>
                                <button className='minus' onClick={clickSub}>-</button>
                            </div>
                        </div>
                    </div>
                    <button className='booknow-btn'>Book Now</button>
                </form>

            </div>
        </div>
    )
}

export default BookNow