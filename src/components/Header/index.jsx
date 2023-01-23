import './style.scss'

const Header = ({children}) => {
    return <div className="header">
        <img src='./assets/logo.svg' className='logo-kasa' alt='Logo Kasa'/>
        {/* {children} */}
    </div>
}

export default Header