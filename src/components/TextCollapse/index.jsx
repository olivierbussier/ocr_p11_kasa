import { useRef, useState } from 'react'
import './style.scss'

const TextCollapse = ({title, children}) => {

    // true => affiché, caret up
    // false => hidden, caret down

    const [etat, setEtat] = useState(false)
    const [maxHeight, setMaxHeight] =  useState(0)
    const p = useRef(null)
    const div = useRef(null)


    const onClick = (e) => {
        !etat ? setMaxHeight(p.current.clientHeight) : setMaxHeight(0)
        setEtat(!etat)
    }

    return <div className='text-collapse'>
        <div className="title-text-collapse" onClick={onClick}>
            <div>{title}</div>
            <img className={etat === false ? "caret" : "caret down"} src='/assets/down.svg' alt='caret up'/>
        </div>
        <div ref={div} style={{maxHeight: maxHeight}} className="text">
            <p ref={p}>{children}</p>
        </div>
    </div>
}

export default TextCollapse