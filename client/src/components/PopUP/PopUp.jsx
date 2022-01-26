import React from "react";
import Card from "@mui/material/Card";
import "./PopUp.scss";
import { Avatar } from "@mui/material";

export default function PopUp({
  event: {
    size,
    address,
    type,
    timestamp,
    description,
    petsAllowed,
    vaccinationRequired,
    createdBy,
  },
}) {
  return (
    <div className="card">
      <div className="event">
        <div className="event__wrapper">
          <div className="event__user-info">
            <Avatar
              className="event__avatar"
              src={`https://avatars.dicebear.com/api/croodles/${createdBy}.svg`}
            />

            <p className="event__info event__info--user-name">{createdBy}</p>
          </div>
          {/* <p className="event__info event__info--vaccine">
            {vaccinationRequired ? "Must be Vaccinated" : ""}
          </p>
          <p className="event__info event__info--pets">
            {petsAllowed ? "Pet Friendly" : ""}
          </p> */}

          <div className="container container--size">
            <i className="icon icon--size"></i>
            <p className="event__info event__info--size">{size}</p>
          </div>

          <div className="container container--address">
            <i className="icon icon--address"></i>
            <p className="event__info">{address}</p>
          </div>
          {/* <div className="container container--type">
          <i className="icon icon--type"></i>
          <p className="event__info">{type}</p>
        </div> */}

          <div className="container container--date">
            <i className="icon icon--date"></i>
            <p className="event__info event__info--date">{timestamp}</p>
          </div>

          <div className="container container--description">
            <i className="icon icon--description"></i>
            <p className="event__info event__info--type">
              {type} {petsAllowed ? " | Pet Friendly" : ""}
              {vaccinationRequired ? " | Must be Vaccinated" : ""}
            </p>
          </div>
          <p className="event__info event__info--description">{description}</p>

          {/* <div className="container container--pets">
            <i className="icon icon--pets"></i>
            <p className="event__info">{petsAllowed}</p>
          </div> */}

          {/* <div className="container container--vaccination">
            <i className="icon icon--vaccine"></i>
            <p className="event__info">{vaccinationRequired}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
