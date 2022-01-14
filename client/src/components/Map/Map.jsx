import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "../GoogleMap/GoogleMap";
import React from "react";
const google_maps_key = process.env.REACT_APP_GM_KEY;
const render = (status) => {
  return <h1>{status}</h1>;
};

const vancouver = {
  lat: 49.2600767,
  lng: -123.1269348,
};

export default function JoyninMap() {
  return (
    <div
      style={{
        display: "flex",
        height: 400,
        width: "100%",
      }}
    >
      <Wrapper
        apiKey={"AIzaSyAm9zGabaaseCQlbCarLu3rSkqKi7j-Asc"}
        render={render}
      >
        <Map
          center={vancouver}
          zoom={12}
          style={{ flexGrow: "1", height: "100%" }}
        ></Map>
      </Wrapper>
    </div>
  );
}
