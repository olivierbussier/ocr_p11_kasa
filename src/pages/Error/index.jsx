import './style.scss'

const Error = ({text}) => {
    return <div className='error-page'>
        <div className='error-code'>404</div>
        <div className='error-detail'>Oups! La page que vous demandez n'existe pas.</div>
        <a className='error-action' href='/'>Retourner sur la page d’accueil</a>
    </div>
}

export default Error