import React from 'react'
import "./Resultat.css"
const Resultat = (props) => {
return (
    <div className='Resultat'>
        <div className='userplace'>
            <div className='userpick'>
            {props.userChoice && (
            <img src={`./images/icon-${props.userChoice}.svg`} alt="" />
            )}
            </div>
        </div>
        <div className='verdict'>
            <div>
                <p>{props.verdict}</p>
            </div>
            <button className='btn-again' onClick={props.onPlayAgain}>
                PLAY AGAIN
            </button>
        </div>
        <div className='systemplace'>
            <div className='systempick'>
            {props.systemChoice && (
            <img src={`./images/icon-${props.systemChoice}.svg`} alt="" />
            )}
            </div>
        </div>
    </div>
    )
}

export default Resultat