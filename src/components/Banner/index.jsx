import { useState } from 'react'
import './style.scss'

const Banner = ({images, children, height}) => {

    // Si nbimages == 1 alors bannière simple
    // Sinon carrousel

    const styleHeight = height ?? 223

    const [currentImage, setCurrentImage] = useState(0)
    const nbImages = images.length
    const hideCaret = nbImages === 1 ? " hide" : ""

    const clickLeft = () => {
        const newImage = currentImage - 1
        newImage < 0 ? setCurrentImage(nbImages-1) : setCurrentImage(newImage)
    }

    const clickRight = () => {
        const newImage = currentImage + 1
        newImage >= nbImages ? setCurrentImage(0) : setCurrentImage(newImage)
    }

    const imageToDisplay = images[currentImage]

    return <div className='banner' style={{height: height }}>
                <img src='/assets/caret-left.svg' alt='Left arrow' className={"caret-left" + hideCaret} onClick={clickLeft}/>
                <img src={imageToDisplay} className='banner-image' alt='banner kasa' />
                {children && <div className='banner-centered-text'>{children}</div>}
                <img src='/assets/caret-right.svg' alt='right arrow' className={"caret-right" + hideCaret} onClick={clickRight}/>
           </div>
}

export default Banner