import React from "react";
import Circle from "../Circle/Circle";
import "./Hero.scss";

export default function Hero() {
  return (
    <div>
      <div className="image">
        <div className="image__one">this is image1</div>
        <div className="image__two">this is image2</div>
        {/* TODO: check out why the keyframes doesn't work */}

        <div className="image__color-block">this is color block</div>
      </div>
    </div>
  );
}
