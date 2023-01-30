import './style.scss'
import {Link} from 'react-router-dom'

const Header = () => {

    const currentUrl = new URL(window.location.href).pathname


    return <div className="header">
        <img src='/assets/logo-red.svg' className='logo-kasa' alt='Logo Kasa'/>
        <nav className='nav-menu'>
            <ul>
                <li><Link to='/' className={currentUrl === '/' ? 'underlined' : null}>Accueil</Link></li>
                <li><Link to='/apropos' className={currentUrl === '/apropos' ? 'underlined' : null}>A Propos</Link></li>
            </ul>
        </nav>
    </div>
}

export default Header