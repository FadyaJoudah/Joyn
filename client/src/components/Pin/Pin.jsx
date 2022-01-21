import React, { useState } from "react";
import "./Pin.scss";

export default function Pin() {
  const [open, setOpen] = useState(false);

  function onPinClick() {
    setOpen(!open);
  }
  console.log(open);
  return (
    <div>
      <div
        onClick={onPinClick}
        className={open ? "pin-svg pin-svg--light" : "pin-svg pin-svg--dark"}
      ></div>
    </div>
  );
}
