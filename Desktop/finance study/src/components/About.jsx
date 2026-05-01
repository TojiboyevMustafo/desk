import React from 'react'
import './About.css'
import Actor from '../assets/About_Actor.png'
import Cameramen from '../assets/About_Cameramen.png'
import Men from '../assets/About_Men.png'
import Left from '../assets/About_Left.png'
import Right from '../assets/About_Right.png'
import One from '../assets/About_One.png'
import Two from '../assets/About_Two.png'
import Three from '../assets/About_Three.png'

const About = () => {
  return (
    <div className='about'>
      <h1 className='about_h1'>Trusted by leaders of the creative community</h1>
      <div className='about_photos'>
        <img src={Actor} alt="" />
        <img src={Cameramen} alt="" />
        <img src={Men} alt="" />
      </div>
      <div className='about_characters'>
        <img src={Left} alt="" />
        <img src={Right} alt="" />
      </div>
      <p className='about_p'>Featured in</p>
      <div className='about_companies'>
        <img src={One} alt="" />
        <img src={Two } alt="" />
        <img src={Three} alt="" />
      </div>
    </div>
  )
}

export default About