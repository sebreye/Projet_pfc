import React from 'react'
import "./Header.css"
const Header = ({score}) => {
return (
    <section className='header-bar'>
        <div className='flex-block'>
            <div className='logo-wrapper'>
                <img src="./images/logo.svg" alt="" className='logo' />
            </div>
            <div className='game-score'>
                <h3 className='game-score_title'>Score</h3>
                <p className='game-score_value'>{score}</p>
            </div>
        </div>
    </section>
    )
}

export default Header