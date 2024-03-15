import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";






//여기를 수정해주세요!!
//[woman-with-tablet] 을 cat1 , cat2 , dog1 , dog2 중 하나로 바꿔주세요
//예시) import image from "../images/cat1.jpg"; 이렇게요!

import image from "../images/woman-with-tablet.jpg";
const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";












const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
