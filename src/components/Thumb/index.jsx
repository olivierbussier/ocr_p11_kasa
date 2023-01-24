import './style.scss'

const Thumb = (props) => {
    return <div className='thumb'>
        <img className='picture' src={props.data.cover} alt='Bien'/>
    </div>
}

export default Thumb