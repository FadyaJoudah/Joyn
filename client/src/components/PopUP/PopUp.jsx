import React from "react";
import Card from "@mui/material/Card";
import "./PopUp.scss";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export default function PopUp({ event: JoynEvent, closePop, onDeleteEvent }) {
  let currentUser = localStorage.getItem("user");
  currentUser = JSON.parse(currentUser);
  const {
    organizerEmail,
    size,
    address,
    type,
    timestamp,
    description,
    petsFriendly: petsAllowed,
    vaccine: vaccinationRequired,
    createdBy,
  } = JoynEvent;
  const history = useHistory();

  function onSignInClick() {
    history.push("/signin");
  }
  return (
    <div className="card">
      <div className="event">
        {localStorage.getItem("token") ? (
          <div className="event__wrapper">
            <div className="event__user-info">
              <Avatar
                className="event__avatar"
                src={`https://avatars.dicebear.com/api/croodles/${createdBy}.svg`}
              />

              <p className="event__info event__info--user-name">{createdBy}</p>
              <div onClick={closePop}>✕</div>
            </div>
            <div className="container container--size">
              <i className="icon icon--size"></i>
              <p className="event__info event__info--size">{size}</p>
            </div>

            <div className="container container--address">
              <i className="icon icon--address"></i>
              <p className="event__info">{address}</p>
            </div>

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
            <p className="event__info event__info--description">
              {description}
            </p>
            {/* <a href="mailto:abc@example.com?subject = Feedback&body = Message">
            Send Feedback
          </a> */}
            <div className="button-Container">
              <Button
                variant="contained"
                className="button"
                target={"_blank"}
                href={`mailto:${JoynEvent.organizerEmail}?subject=Request to Joyn your ${JoynEvent.type} Event &body=Hi ${JoynEvent.createdBy} - Can I Joyn Your Event`}
                style={{ backgroundColor: "#FCCA42" }}
              >
                contact
              </Button>
            </div>
          </div>
        ) : (
          <div className="logged-out">
            <p> You Need to Have an Account to See Event Information</p>
            <Button
              onClick={onSignInClick}
              variant="contained"
              className="logged-out__button"
              style={{ backgroundColor: "#FCCA42", marginTop: 24 }}
            >
              sign in
            </Button>
          </div>
        )}
        {currentUser && currentUser.id === JoynEvent.creatureID && (
          <div className="button-Container">
            <Button
              onClick={() => onDeleteEvent(JoynEvent.id)}
              variant="outlined"
              className="logged-out__button"
              style={{ color: "#FCCA42", marginLeft: 20, marginBottom: 20 }}
            >
              delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
