import React from "react";
import GoogleMapReact from "google-map-react";
import Pin from "../Pin/Pin";
const google_maps_key = process.env.REACT_APP_GM_KEY;
console.log(google_maps_key);

const AnyReactComponent = ({ text }) => (
  <div style={{ height: 50, width: 50, backgroundColor: "red" }}>{"fado"}</div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const vancouver = {
    lat: 49.360075,
    lng: -123.1269348,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAm9zGabaaseCQlbCarLu3rSkqKi7j-Asc" }}
        defaultCenter={vancouver}
        defaultZoom={defaultProps.zoom}
      >
        <Pin lat={vancouver.lat} lng={vancouver.lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
