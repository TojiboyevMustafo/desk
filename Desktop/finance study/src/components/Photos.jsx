import React from 'react'
import './Photos.css'
import Lana from '../assets/Photos_Lana.png'
import Jake from '../assets/Photos_Jake.png'
import Nora from '../assets/Photos_Nora.png'
import John from '../assets/Photos_John.png'
import Martha from '../assets/Photos_Martha.png'
import Board from '../assets/Photos_Board.png'

const Photos = () => {
  return (
    <div>
        <div className='photos'>
            <img src={Lana} alt="" />
            <img src={Jake} alt="" />
            <img src={Nora} alt="" />
            <img src={John} alt="" />
            <img src={Martha} alt="" />
        </div>
        <div className='board-container'>
            <img src={Board} alt="" />
        </div>
    </div>
  )
}

export default Photos