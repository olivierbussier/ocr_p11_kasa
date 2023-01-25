import './style.scss'

const Thumb = ({data}) => {
    return <div className='thumb'>
        <img className='picture' src={data.cover} alt='Bien'/>
        <div className="title">
            {data.title}
        </div>
    </div>
}

export default Thumb