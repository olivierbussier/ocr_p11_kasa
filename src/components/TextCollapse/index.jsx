import { useEffect, useRef, useState } from 'react'
import './style.scss'

import PropTypes from 'prop-types';

const TextCollapse = ({title, children, open = false}) => {

    const [etat, setEtat] = useState(open)
    const p = useRef(null)
    const [maxHeight, setMaxHeight] =  useState(0)
    const div = useRef(null)

    const setHeight = (cond) => { cond ? setMaxHeight(p.current.clientHeight) : setMaxHeight(0) }

    useEffect(() => { setHeight(open) }, [open])

    const onClick = (e) => {
        setHeight(!etat)
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

TextCollapse.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    open: PropTypes.bool
}

export default TextCollapse