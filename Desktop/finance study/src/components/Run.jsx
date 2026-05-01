import React from 'react'
import './Run.css'
import Home from '../assets/Run_Home.png'
import Pay from '../assets/Run_Pay.png'
import Splits from '../assets/Run_Splits.png'
import Collectives from '../assets/Run_Collectives.png'

const Run = () => {
  return (
    <div className="run">
        <div className="run-title">
            <p className="title-p">Less Administration, More Imagination</p>
            <h1 className="title-h1">Get your business up and running on Stir</h1>    
        </div>
        <div className="run-images" >
            <img src={Home} alt="Home" />
            <img src={Pay} alt="Pay " />
            <img src={Splits} alt="Splits" />
            <img src={Collectives} alt="Collectives" />
        </div>
    </div>
  )
}

export default Run