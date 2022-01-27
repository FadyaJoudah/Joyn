import React, { useState } from "react";
import "./Pin.scss";

export default function Pin({ onPinClick, light }) {
  //changes the look of the pin depending on the state
  function handleClick() {
    onPinClick();
  }
  return (
    <div>
      <div
        onClick={handleClick}
        className={light ? "pin-svg pin-svg--light" : "pin-svg pin-svg--dark"}
      ></div>
    </div>
  );
}
