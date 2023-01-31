import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="card">
      <Link to={"fiche/" + data.id} data-testid={data.id}>
        <img className="picture" src={data.cover} alt="Bien" />
        <div className="title">{data.title}</div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
  }),
};
export default Card;
