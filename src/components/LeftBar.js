import React from 'react'
import '../style/LeftBar.css'
import yoga from '../Photos/yoga.png'
import Swim from '../Photos/Swim.png'
import Bike from '../Photos/Bike.png'
import weight from '../Photos/weight.png'

export default function LeftBar() {
    return (
        <aside className='leftbar'>
            <ul className="leftbar-icons">
                <li>
                    <img src={yoga} alt="yoga"/>
                </li>
                <li>
                    <img src={Swim} alt="Swim"/>
                </li>
                <li>
                    <img src={Bike} alt="Bike"/>
                </li>
                <li>
                    <img src={weight} alt="weight"/>
                </li>
            </ul>
            <p className='vertical-text'>Copiryght, SportSee 2020</p>
        </aside>
    )
}
