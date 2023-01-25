import './style.scss'

const Header = () => {

    const currentUrl = new URL(window.location.href).pathname


    return <div className="header">
        <img src='/assets/logo-red.svg' className='logo-kasa' alt='Logo Kasa'/>
        <nav className='nav-menu'>
            <ul>
                <li><a href='/'        className={currentUrl === '/' ? 'underlined' : null}>Accueil</a></li>
                <li><a href='/apropos' className={currentUrl === '/apropos' ? 'underlined' : null}>A Propos</a></li>
            </ul>
        </nav>
    </div>
}

export default Header