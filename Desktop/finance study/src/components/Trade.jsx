import React from 'react'
import './Trade.css'
import Button from '../assets/Trade_Button.png'
import Board from '../assets/Trade_Board.jpg'

const Trade = () => {
  return (
    <div className="trade">
        <div className="trade-start">
            <img src={Button} alt="" />
            <p className="trade-start-p">Co-opportunity Knocks</p>
            <h1 className="trade-start-h1">Collectives: The future of collab culture</h1>
        </div>
        <p className='trade-p'>Coming later this year</p>
        <div className="trade-board">
            <img src={Board} alt="" />
        </div>
    </div>
  )
}

export default Trade