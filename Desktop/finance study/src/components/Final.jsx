import React from 'react'
import "./Final.css";
import Stir from "../assets/Final_Stir.png";
import Instagram from '../assets/Final_Ins.png';
import Twitter from '../assets/Final_Twi.png';
import date from '../assets/Final_2021.png';

const Final = () => {
  return (
    <div className='final'>
        <div className='final-container'>
            <div className='final-one'>
                <h2 className='one-h2'>Cheers to a more imaginative world.</h2>
                <button className='one-but'>Subscribe for updates</button>
            </div>
            <div className='final-two'>
                <img src={Stir} alt="" />
            </div>            
        </div>
        <div className='final-footer'>
            <div className='final-three'>
                <img src={Instagram} alt="" />
                <img src={Twitter} alt="" />
            </div>
            <div className='final-four'>
                <p className='final-four-text'>Terms</p>
                <p className='final-four-text'>Privacy</p>
                <img src={date} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Final