import React from 'react'
import "./Choice.css"
const Choice = () => {
return (
    <div>
        <div className='play-board'>
        <div className='play-board_inner'>
            <div className="shape-box paper-box">
            <button
            className="shape-button shape_paper"
            >
            <img src="./images/icon-paper.svg" alt="" />
            </button>
            </div>
            <div className="shape-box rock-box">
            <button
            className="shape-button shape_rock"
            >
            <img src="./images/icon-rock.svg" alt="" />
            </button>
            </div>
            <div className="shape-box scissors-box">
            <button
            className="shape-button shape_scissors"
            >
            <img src="./images/icon-scissors.svg" alt="" />
            </button>
            </div>
            
        </div>
    </div>
    </div>
    )
}

export default Choice