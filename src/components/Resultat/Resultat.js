import React from 'react'
import { useEffect, useState } from 'react'
import "./Resultat.css"
function Resultat(props) {
    const [countdown, setCountdown] = useState(3);
    const choiceStyle = {
        rock: {
            height:"150px",
            width:"150px",
            border:"15px solid  #dd405d"
        
        },
        paper: {
            height:"150px",
            width:"150px",
            border:"15px solid #4865f4",
        },
        scissors: {
            height:"150px",
            width:"150px",
            border:"15px solid #ec9e0e",
        },
    };
    
    useEffect(() => {
        const timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    
    return (
        <div className='Resultat'>
        {props.userChoice && (
            
            <div className='userplace'style={choiceStyle[props.userChoice]}>
                <div className='userpick'>
                <img src={`./images/icon-${props.userChoice}.svg`} alt="" />
                </div>
            </div>
        )}
        <div className='verdict'>
            {countdown > 0 ? (
            <div>
                <p>{countdown}</p>
            </div>
            ) : (
            <div>
                <p>{props.verdict}</p>
            </div>
            )}
            <button className='btn-again' onClick={props.onPlayAgain}>
            PLAY AGAIN
            </button>
        </div>
        <div className='systemplace' >
            {countdown === 0 && (
            <div className='systemplace' style={choiceStyle[props.systemChoice]}>
                <div className='systempick'>
                {(props.showSystemChoice || props.systemChoice !== null) && (
        <img src={`./images/icon-${props.systemChoice}.svg`} alt="" />
        )}
            </div>
            </div>
            
            )}
        </div>
        </div>
    );
}

export default Resultat