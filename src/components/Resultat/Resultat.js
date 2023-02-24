import React from 'react'
import "./Resultat.css"
const Resultat = ({verdict}) => {
return (
    <div className='Resultat'>
        <div className='userplace'>
            <div className='userpick'>

            </div>
        </div>
        <div className='verdict'>
            <div>
                <p>{verdict}</p>
            </div>
            <button className='btn-again'>
                PLAY AGAIN
            </button>
        </div>
        <div className='systemplace'>
            <div className='systempick'>
                
            </div>
        </div>
    </div>
    )
}

export default Resultat