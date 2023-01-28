import { useState } from 'react'
import PropTypes from 'prop-types';

import './style.scss'

// Composants privés

const Caret = ({direction, hide, onClick}) => {
    return <img src={'/assets/caret-'+direction+'.svg'} alt={direction+' arrow'} className={"caret-"+direction + (hide ? " hide" : "")} onClick={onClick}/>
}
const Counter = ({nbImages, currentImage}) => {
    return nbImages > 1 ? <div className='img-counter'>{(currentImage+1) + '/'+ nbImages}</div> : null
}
const Images = ({images, ident, show}) => {
    return images.map((i,index) => {
        return <img key={ident + '-' + index} src={i} className={'banner-image'+ ((index === show) ? " show" : "")} alt='banner kasa' />
    })
}
const Text = ({text}) => {
    return text && <div className='banner-centered-text'>{text}</div>
}

// Composant exporté

const Banner = ({images, children, height, ident="id-banner"}) => {

    // Si nbimages == 1 alors bannière simple
    // Sinon carrousel

    let img=images
    if (typeof images === 'string')
        img = [images]

    const [currentImage, setCurrentImage] = useState(0)
    const nbImages = img.length
    const hideCaret = nbImages === 1

    const clickLeft = () => {
        const newImage = currentImage - 1
        newImage < 0 ? setCurrentImage(nbImages-1) : setCurrentImage(newImage)
    }

    const clickRight = () => {
        const newImage = currentImage + 1
        newImage >= nbImages ? setCurrentImage(0) : setCurrentImage(newImage)
    }

    return <div className='banner' style={{height: height }}>
        <Caret direction='left' hide={hideCaret} onClick={clickLeft} />
        <Counter nbImages={nbImages} currentImage={currentImage} />
        <Images images={img} ident={ident} show={currentImage}/>
        <Text text={children} />
        <Caret direction='right' hide={hideCaret} onClick={clickRight} />
    </div>
}

Banner.propTypes = {
    images: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string
    ]),
    children: PropTypes.string,
    height: PropTypes.number,
    ident: PropTypes.string
}
export default Banner