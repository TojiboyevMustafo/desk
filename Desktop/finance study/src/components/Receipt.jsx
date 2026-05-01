import React from 'react'
import './Receipt.css'
import Button from '../assets/Receipt_Button.png'
import One from '../assets/Receipt_One.png'
import Two from '../assets/Receipt_Two.png'
import Three from '../assets/Receipt_Three.png'
import Menu from '../assets/Receipt_Menu.png'
import Link from '../assets/Receipt_Link.png'

const Receipt = () => {
  return (
    <div className='receipt'>
        <div className='receipt_start'>
            <img src={Button} alt="" />
            <p className='receipt_p'>Your entire business at a glance</p>
            <h1 className='receipt_h1'>Stay organized. Without any extra work.</h1>
        </div>
        <div className='receipt_middle'>
            <img src={One} alt="" />
            <img src={Two} alt="" /> 
            <img src={Three} alt="" /> 
        </div>
        <div className='receipt_end'>
            <img src={Menu} alt="" />
            <img src={Link} alt="" />
        </div>
    </div>
  )
}

export default Receipt