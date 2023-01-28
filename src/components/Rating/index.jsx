import './style.scss'

const validateRating = (rating) => {
    const r = parseInt(rating)
    return (typeof r != 'number' || isNaN(r) || rating < 0 || rating > 5) ? false : true
}

const Rating = ({rating}) => {

    let r = !validateRating(rating) ? 0 : rating

    return <div className='rating'>
        {[1, 2, 3 ,4, 5].map((e, index) =>
            <img key={'rating_' + index}
                 src={index < r ? "/assets/star-on.svg" : "/assets/star-off.svg"}
                 className='rating-star' alt='star'/>
        )}
    </div>
}

Rating.propTypes = {
    rating: function(props, propName, componentName) {
        if (!validateRating(props[propName]))
            return new Error('Invalid prop `' + propName + '` supplied to `' + componentName +
                             '`: Value must be number in range [0,5] included. Validation failed.')
    }
}
export default Rating