import React from 'react'
import "./Rules.css"
const Rules = ({onClose}) => {
return (
<div className='modal'>
    <div className='game-rules'>
        <div className='game-rules_inner flex-block'>
            <div className='game-rules_header flex-block'>
            <h3 className='game-rules_title'>Rules</h3>
            <img
                onClick={onClose}
                src="./images/icon-close.svg"
                alt='close icon'
                className='close-icon'
            />
            </div>
            <div>
            <img src="./images/image-rules.svg" alt='rules' className='game-rules_image' />
            </div>
        </div>
        </div>
    </div>
    )
}

export default Rules