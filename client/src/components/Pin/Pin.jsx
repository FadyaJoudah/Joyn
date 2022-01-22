import React, { useState } from "react";
import "./Pin.scss";

export default function Pin({ onPinClick }) {
  const [open, setOpen] = useState(false);

  //changes the look of the pin depending on the state
  function handleClick() {
    // setOpen(!open);
    onPinClick();
  }
  console.log(open);
  return (
    <div>
      <div
        onClick={handleClick}
        className={open ? "pin-svg pin-svg--light" : "pin-svg pin-svg--dark"}
      ></div>
    </div>
  );
}
