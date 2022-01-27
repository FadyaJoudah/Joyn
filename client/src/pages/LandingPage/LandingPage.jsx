import React from "react";
import "./LandingPage.scss";

export default function LandingPage() {
  // TODO: work for my 2nd sprint
  return (
    <div className="landing">
      <div className="shadow"></div>
      <h2 className="landing__logo">JOYN</h2>
      <div className="landing__text-container">
        <p className="landing__text">Expand Your Circle</p>
        <p className="landing__text">Make New Friends</p>
        <p className="landing__text">Invite People to Your World</p>
      </div>
      <div className="background"></div>
    </div>
  );
}
