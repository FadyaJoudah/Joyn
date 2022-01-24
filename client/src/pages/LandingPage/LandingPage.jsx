import React from "react";
import Hero from "../../components/Hero/Hero";
import { Typography } from "@mui/material";
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
          src="https://vod-progressive.akamaized.net/exp=1643013436~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4675%2F18%2F473378199%2F2109778538.mp4~hmac=0f238286fc2d0f5bedcfd3ced1b9582955c00ac45ba5f25ef8773acf945220b1/vimeo-prod-skyfire-std-us/01/4675/18/473378199/2109778538.mp4?filename=pexels-cottonbro-5730324.mp4"
        />
      </video>
      {/* <video autoPlay muted loop className="landing__main-video">
        <source
          type="video/mp4"
          src="https://vod-progressive.akamaized.net/exp=1643017084~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F944%2F20%2F504721299%2F2310050723.mp4~hmac=67ccbe9009de23de5c5acb2229ea5ebeb49525cfcd8a77b88ad010092f6c438c/vimeo-prod-skyfire-std-us/01/944/20/504721299/2310050723.mp4?filename=pexels-mikhail-nilov-6603267.mp4"
        />
      </video>
      <video autoPlay muted loop className="landing__main-video">
        <source
          type="video/mp4"
          src="https://vod-progressive.akamaized.net/exp=1643013436~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4675%2F18%2F473378199%2F2109778538.mp4~hmac=0f238286fc2d0f5bedcfd3ced1b9582955c00ac45ba5f25ef8773acf945220b1/vimeo-prod-skyfire-std-us/01/4675/18/473378199/2109778538.mp4?filename=pexels-cottonbro-5730324.mp4"
        />
      </video> */}
      {/* <Hero /> */}
    </div>
  );
}
