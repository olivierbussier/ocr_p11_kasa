import "./style.scss";
import { Link } from "react-router-dom";

const Error = ({ text }) => {
  return (
    <div className="page-error">
      <div className="error-code">404</div>
      <div className="error-detail">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link to="/" className="error-action">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;
