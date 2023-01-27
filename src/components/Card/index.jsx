import './style.scss'

const Card = ({data}) => {

    return <div className='card'>
        <a href={"fiche/" + data.id}>
            <img className='picture' src={data.cover} alt='Bien'/>
            <div className="title">
                {data.title}
            </div>
        </a>
    </div>
}

export default Card