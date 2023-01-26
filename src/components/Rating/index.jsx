import './style.scss'

const Rating = ({rating}) => {

    const indexes = [0, 1, 2, 3 ,4]

    return <div className='rating'>
        {indexes.map((e, index) =>
            index < rating
                ? <img key={'rating_' + index} src="/assets/star-on.svg" className='rating-star' alt='star'/>
                : <img key={'rating_' + index} src="/assets/star-off.svg" className='rating-star' alt='star'/>
        )}
    </div>
}

export default Rating