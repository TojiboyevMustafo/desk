import React from 'react'
import './Data.css'
import Code from '../assets/Data_Code.png' 
import True from '../assets/Data_True.png' 

const Data = () => {
  return (
    <div className="data">
        <div className="data-container">
            <div>
                <img src={Code} alt="Data Code" />
            </div>
            <div className="data-text">
                <div>
                    <p className="text-p">Serious about security</p>
                    <h1 className="text-h1">Our top priority is keeping your data safe and secure.</h1>                    
                </div>

                <div className="data-true">
                    <div className="data-true-div">
                        <img src={True} alt="" />
                        <p className="in-p">We will never (ever) share your data</p>
                    </div>
                    <div className="data-true-div">
                        <img src={True} alt="" />
                        <p className="in-p">Secured by TLS (SSL) 256-bit bank-level encryption</p>
                    </div>
                    <div className="data-true-div">
                        <img src={True} alt="" />
                        <p className="in-p" >We’re a multi-creator network, not an MCN</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Data