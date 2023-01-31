import { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

// Composants privés

const Caret = ({ direction, hide, onClick }) => {
  return (
    <img
      src={"/assets/caret-" + direction + ".svg"}
      alt={direction + " arrow"}
      className={"caret-" + direction + (hide ? " hide" : "")}
      onClick={onClick}
    />
  );
};
const Counter = ({ nbImages, currentImage }) => {
  return nbImages > 1 ? (
    <div className="img-counter">{currentImage + 1 + "/" + nbImages}</div>
  ) : null;
};
const Images = ({ images, ident, show }) => {
  return images.map((i, index) => {
    return (
      <img
        key={ident + "-" + index}
        src={i}
        className={"banner-image" + (index === show ? " show" : "")}
        alt="banner kasa"
      />
    );
  });
};
const Text = ({ text }) => {
  return text && <div className="banner-centered-text">{text}</div>;
};

// Composant exporté

const Banner = ({ images, children, height, ident = "id-banner" }) => {
  let img;
  typeof images === "string" ? (img = [images]) : (img = images);

  const [currentImage, setCurrentImage] = useState(0);
  const nbImages = img.length;

  const modulo = (pas) => {
    setCurrentImage(
      currentImage === 0 && pas < 0
        ? nbImages - 1
        : (currentImage + pas) % nbImages
    );
  };

  return (
    <div className="banner" style={{ height: height }}>
      <Caret
        direction="left"
        hide={nbImages === 1}
        onClick={() => modulo(-1)}
      />
      <Counter nbImages={nbImages} currentImage={currentImage} />
      <Images images={img} ident={ident} show={currentImage} />
      <Text text={children} />
      <Caret
        direction="right"
        hide={nbImages === 1}
        onClick={() => modulo(1)}
      />
    </div>
  );
};

Banner.propTypes = {
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  children: PropTypes.string,
  height: PropTypes.number,
  ident: PropTypes.string,
};
export default Banner;
