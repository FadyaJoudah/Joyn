import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import Pin from "../Pin/Pin";

const google_maps_key = process.env.REACT_APP_GM_KEY;

// Vancouver cords
const vancouver = {
  lat: 49.256638,
  lng: -123.13854,
};

export default function SimpleMap() {
  const [eventList, setEventList] = useState([]);
  //request events on the first render only, and when refreshing the page
  useEffect(() => {
    axios.get("http://localhost:8080/events/all").then((res) => {
      setEventList(res.data);
    });
  }, []);

  return (
    // Important! Always set the container height explicitly
    //TODO: move this style to scss file
    <div style={{ height: "40rem", width: "100%" }}>
      <GoogleMapReact
        //TODO: use env of key
        bootstrapURLKeys={{ key: "AIzaSyAm9zGabaaseCQlbCarLu3rSkqKi7j-Asc" }}
        //default map view and xoom
        defaultCenter={vancouver}
        defaultZoom={13}
      >
        {/* mapping the event list to display it on map as pins */}
        {eventList.map((element) => {
          return <Pin lat={element.location.lat} lng={element.location.lng} />;
        })}
      </GoogleMapReact>
    </div>
  );
}
