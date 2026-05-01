import React from 'react'
import './Explanation.css'
import Button from '../assets/Explanation_Button.png'
import Board from '../assets/Explanation_Board.png'
import Youtube from '../assets/Exp_Youtube.png'
import Patreon from '../assets/Exp_Patreon.png'
import Shopify from '../assets/Exp_Shopify.png'
import Anchor from '../assets/Exp_Anchor.png'
import Stripe from '../assets/Exp_Stripe.png'
import Onlyfans from '../assets/Exp_Onlyfans.png'

const Explanation = () => {
  return (
    <div className="explanation">
        <div className="explanation-start">
            <img src={Button} alt="" />
            <p className='exp-start-p'>If you want to go far, go together</p> 
            <h1 className='exp-start-h1'>Get creative with others in just a Split.</h1>           
        </div>
        <div className="explanation-main">
            <div className="exp-main-one">
                <h3 className='exp-main-h3'>Split the revenue on a video,
                    line of merch, or that latest
                    and greatest podcast. The possibilities 
                    are endless when you share upside together.</h3>
                <div className="exp-main-one-in">
                    <p className='exp-main-in-p'>Supported platforms</p>
                    <img src={Youtube} alt="" />
                    <img src={Patreon} alt="" />
                    <img src={Shopify} alt="" />
                    <img src={Anchor} alt="" />
                    <img src={Stripe} alt="" />
                    <img src={Onlyfans} alt="" />
                </div>
            </div>
            <div className="exp-main-two">
                <img src={Board} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Explanation