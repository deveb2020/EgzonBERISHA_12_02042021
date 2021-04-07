import React, { useState, useEffect } from 'react'
import '../style/Nutritions.css'
import Fire from '../Photos/Fire.png'
import ChickenLeg from '../Photos/ChickenLeg.png'
import Apple from '../Photos/Apple.png'
import Burger from '../Photos/Burger.png'
import { requestNutrition } from "../components/ApiCalls"




export default function Nutritions() {

    const [calories, setCalories] = useState()
    const [protein, setProtein] = useState()
    const [glucide, setClucide] = useState()
    const [lipide, setLipide] = useState()
    

    useEffect(() => {
        requestNutrition(setCalories, setProtein, setClucide, setLipide)
    }, [])


    return (
        <div className="nutrtions-parentdiv">
            <ul>
                <li>
                    <div className="inside-content-wrapper">
                        <div className="icon-box fire-bkg">
                            <img src={Fire} alt=""/>
                        </div>
                        <div className="icon-text">
                            <p className="quantity">{calories}kCal</p>
                            <p className="nutrition-type">Calories</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="inside-content-wrapper">
                        <div className="icon-box chicken-bkg">
                            <img src={ChickenLeg} alt=""/>
                        </div>
                        <div className="icon-text">
                            <p className="quantity">{protein}g</p>
                            <p className="nutrition-type">Proteins</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="inside-content-wrapper">
                        <div className="icon-box apple-bkg">
                            <img src={Apple} alt=""/>
                        </div>
                        <div className="icon-text">
                            <p className="quantity">{glucide}g</p>
                            <p className="nutrition-type">Glucides</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="inside-content-wrapper">
                        <div className="icon-box burger-bkg">
                            <img src={Burger} alt=""/>
                        </div>
                        <div className="icon-text">
                            <p className="quantity"> {lipide}g </p>
                            <p className="nutrition-type">Lipides</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
