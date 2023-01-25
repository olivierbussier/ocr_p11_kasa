import { useState } from 'react'
import './style.scss'

const TextCollapse = ({title, children}) => {

    const [etat, setEtat] = useState(false)

    const onClick = (e) => {
        setEtat(!etat)
    }

    return <div className='text-collapse'>
        <div className="title-text-collapse">
            <div>{title}</div>
            <img className="caret" src={etat === false ? '/assets/up.svg' : '/assets/down.svg'} alt='caret up' onClick={onClick}/>
        </div>
        <div className={etat === false ? "text" : "text displayed"}>
            <p>{children}</p>
        </div>
    </div>
}

export default TextCollapse