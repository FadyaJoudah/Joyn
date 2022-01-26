import React from "react";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="shadow"></div>
      <h2 className="landing__logo">JOYN</h2>
      <div className="landing__text-container">
        <p className="landing__text">Expand Your Circle</p>
        <p className="landing__text">Make New Friends</p>
        <p className="landing__text">Invite People to Your World</p>
      </div>
      <video autoPlay muted loop className="landing__main-video">
        <source
          type="video/mp4"
          src="https://www.pexels.com/video/a-group-of-people-playing-ice-hockey-6340282/"
        />
      </video>
    </div>
  );
}
