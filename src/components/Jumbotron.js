import React from "react";
import resourceImage from "../images/jumbo-resource.png";
import welecomeImage from "../images/jumbo-welecome.png";
import aboutUsImage from "../images/about-us-jumbo.png";
import { NavLink } from "react-router-dom";


function Jumbotron() {
  return (
    <div className="jumbo ">

      <div className="flex-column jumbo-image">

        <img
          className="view-width-40 align-element-center"
          src={welecomeImage}
          alt="welecome"
        />

      </div>

      <div className="flex-row flex-space-evenly">

        <NavLink to="/share-resource">

          <div className="flex-column jumbo-image">

            <span className="jumboText">Share Resources!</span>
            <hr />
            <img className="view-width-40 view-height-40 align-element-center" src={resourceImage} alt="resource" />

          </div>

        </NavLink>

        <NavLink to="/">
          <div className="flex-column jumbo-image">
            <span className="jumboText">About us</span>
            <hr />
            <img className="view-width-40 view-height-40 align-element-center" src={aboutUsImage} alt="about us" />
          </div>
        </NavLink>

      </div>

    </div>
  );
}

export default Jumbotron;
