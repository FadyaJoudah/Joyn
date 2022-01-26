import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import Pin from "../Pin/Pin";
import { Card } from "@mui/material";
import PopUp from "../PopUP/PopUp";
import "./GoogleMapsReact.scss";

const google_maps_key = process.env.REACT_APP_GM_KEY;

// Vancouver cords
const vancouver = {
  lat: 49.256638,
  lng: -123.13854,
};

export default function Map({ onMapClick, newLocation, eventList }) {
  const [popUpEvent, setPopUpEvent] = useState();

  const defaultMapOptions = {
    // styles: mapStyles,
  };

  return (
    // Important! Always set the container height explicitly
    //TODO: move this style to scss file
    <div className="map-container">
      <GoogleMapReact
        onClick={({ x, y, lat, lng, event }) => onMapClick({ lat, lng })}
        //TODO: use env of key
        bootstrapURLKeys={{ key: "AIzaSyAm9zGabaaseCQlbCarLu3rSkqKi7j-Asc" }}
        //default map view and zoom
        defaultCenter={vancouver}
        defaultZoom={13}
        options={{
          panControl: false,
          mapTypeControl: false,
          scrollwheel: false,
          // saturation:
          hide: [
            {
              featureType: "poi.business",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {/* mapping the event list to display it on map as pins */}
        {eventList.map((evnt, i) => {
          return (
            <Pin
              key={i}
              onPinClick={() => {
                setPopUpEvent(evnt);
              }}
              lat={evnt.location.lat}
              lng={evnt.location.lng}
            />
          );
        })}
        {newLocation && (
          <Pin lat={newLocation.lat} lng={newLocation.lng} light={true} />
        )}
        {popUpEvent ? (
          <PopUp
            lat={popUpEvent.location.lat}
            lng={popUpEvent.location.lng}
            event={popUpEvent}
          />
        ) : null}
      </GoogleMapReact>
    </div>
  );
}
