import React from 'react'
import Logo from '../Photos/Logo.png'
import '../style/Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <h1 className="logo">
                <img src={Logo} alt="Logo" height="50px" />
            </h1>
            <ul className="navbar-elements">                
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </nav>
    )
}
