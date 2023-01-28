import './style.scss'
import PropTypes from 'prop-types';

const Badge = ({children}) => {
    return <div className="badge">{children}</div>
}

Badge.propTypes = {
    children: PropTypes.string
}
export default Badge