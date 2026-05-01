import React from 'react'
import './Media.css'
import Button from '../assets/Media_Button.png'
import One from '../assets/Media_One.png'
import Two from '../assets/Media_Two.png'
import Three from '../assets/Media_Three.png'
import Four from '../assets/Media_Four.png'

const Media = () => {
  return (
    <div className="media">
        <div className="media-title">
            <img src={Button} alt="" />  
            <p className="media-p">Free. Instant. Professional.</p>
            <h1 className="media-h1">Payments built for creators.</h1>
        </div>
        <div className="media-images">
            <div className="media-images-one">
                <img src={One} alt="" />
                <img src={Two} alt="" /> 
            </div>
            <div className="media-images-two">
                <img src={Three} alt="" />
                <img src={Four} alt="" />  
            </div>
        </div>
        <div className="media-text">
            <div className="media-text-one">
                <h1 className="media-t-one-h1">And we’re just getting started</h1>
                <p className="media-t-one-p">Come work with us</p>
            </div>
            <div className="media-text-two">
                <h2 className="media-t-two-h2">Coming soon</h2>
                <h2 className="media-t-two-h2">Brand partnerships</h2>
                <h2 className="media-t-two-h2">Content linking</h2>
                <h2 className="media-t-two-h2">Public payment profiles</h2>
                <h2 className="media-t-two-h2">Scheduled payments</h2>
                <h2 className="media-t-two-h2">Batch sends</h2>
                <h2 className="media-t-two-h2">Send via DM</h2>
            </div>
        </div>
    </div>
  )
}

export default Media