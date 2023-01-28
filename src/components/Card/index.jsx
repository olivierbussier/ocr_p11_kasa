import PropTypes from 'prop-types';
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

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        cover: PropTypes.string,
        title: PropTypes.string
    })
}
export default Card