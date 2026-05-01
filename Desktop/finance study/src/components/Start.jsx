import React from 'react'
import './Start.css'    
import start from '../assets/Start_stir.png'

const Start = () => {
  return (
    <div className='start-container'>
        <div className="start">
            <img className='start_img' src={start} alt="logo" /> 
            <h2>Join our team</h2>
        </div>
        <div className="start-see">
            <h1 className='start-see-h1'>Where creators run their business.</h1>
            <p className='start-see-p'>Meet Stir. The financial studio for collaborating, splitting revenue, money management and metrics—all in one place</p>
            <div className="email-subscribe">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="email-input" />
                <button className="get-started-btn">
                    Get started
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Start