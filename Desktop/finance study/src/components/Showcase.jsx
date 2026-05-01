import React from 'react'
import './Showcase.css'
import Ticket from '../assets/Showcase_Ticket.png'

const Showcase = () => {
  return (
    <div className="showcase">
        <div className="showcase-text">
            <h2 className="showcase-h2">We've got something for everyone: for maximum effectiveness, set up your entire team on Stir.</h2>
        </div>
        <div className="showcase-image">
            <img src={Ticket} alt="Showcase" />
        </div>
    </div>
  )
}

export default Showcase