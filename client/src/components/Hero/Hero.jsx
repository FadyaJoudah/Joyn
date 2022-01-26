import React from "react";
import Circle from "../Circle/Circle";
import "./Hero.scss";

export default function Hero() {
  return (
    <div>
      <div className="image">
        {/* <div className="image__one">this is image1</div> */}
        <div className="image__two">this is image2</div>
        {/* TODO: check out why the keyframes doesn't work */}
        <div className="image__bubbles">
          <div className="image__bubbles image__bubbles--main">
            <p className="hero-text">
              Meet new friends and bring your local community together for
              social events in your city.
            </p>
          </div>
          <div className="image__bubbles image__bubbles--two"></div>
          <div className="image__bubbles image__bubbles--three"></div>
          {/* <div className="color-three"> 3</div> */}
          <div className="color-four"> </div>
          <div className="color-five"> </div>
        </div>
      </div>
    </div>
  );
}
