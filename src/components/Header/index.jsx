import { useState, useEffect } from 'react'

import {Link, useLocation } from 'react-router-dom'
import './style.scss'

const Header = () => {

    const location = useLocation()

    return <div className="header">
        <img src='/assets/logo-red.svg' className='logo-kasa' alt='Logo Kasa'/>
        <nav className='nav-menu'>
            <ul>
                <li><Link to='/' className={location.pathname === '/' ? 'underlined' : null}>Accueil</Link></li>
                <li><Link to='/apropos' className={location.pathname === '/apropos' ? 'underlined' : null}>A Propos</Link></li>
            </ul>
        </nav>
    </div>
}

export default Header