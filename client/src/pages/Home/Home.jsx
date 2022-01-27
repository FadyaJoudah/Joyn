// import { Avatar } from "@mui/material";
import "./Home.scss";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { blue } from "@mui/material/colors";
import CreateEvent from "../../components/CreateEvent/CreateEvent";
import GoogleMapsReact from "../../components/GoogleMapsReact/GoogleMapsReact";
import { myTheme } from "../../components/Theme/MyTheme";
import { Button, Box } from "@mui/material";
import { flexbox, palette } from "@mui/system";
import Hero from "../../components/Hero/Hero";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { createEvent } from "../../API/API";
const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      // padding: theme.spacing(20, 18),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    root: {
      flexGrow: 1,
    },
    myStyle: {
      // padding: theme.spacing(1),
      height: theme.spacing(50),
    },
    // myStyle: {
    //   // padding: theme.spacing(1),
    //   height: theme.spacing(50),
    // },
  })
);

export default function Home() {
  const [newLocation, setNewLocation] = useState();
  const [allowCreating, setAllowCreating] = useState(false);
  const history = useHistory();
  const [message, setMessage] = useState("");
  const isLoggedIn = !!localStorage.getItem("token");
  const classes = useStyles();
  const [eventList, setEventList] = useState([]);

  //request events on the first render only, and when refreshing the page
  React.useEffect(() => {
    console.log(axios.request.headers);
    axios.get("http://localhost:8080/events/all").then((res) => {
      setEventList(res.data);
    });
  }, []);

  function allowCreateHandler() {
    if (!isLoggedIn) {
      setMessage("You Have to Login First");
      return;
    }
    setAllowCreating(true);
  }

  function onMapClick(location) {
    if (!allowCreating) {
      return;
    }
    setNewLocation(location);
  }

  function resetNewEvent() {
    setNewLocation();
    setAllowCreating();
  }
  function onCreateEvent(
    size,
    address,
    type,
    timeStamp,
    description,
    petsAllowed,
    vaccinationRequired,
    location
  ) {
    createEvent(
      size,
      address,
      type,
      timeStamp,
      description,
      petsAllowed,
      vaccinationRequired,
      location
    ).then((res) => {
      axios.get("http://localhost:8080/events/all").then((res) => {
        setEventList(res.data);
        resetNewEvent();
      });
    });
  }
  const handleDeleteEvent = (eventId) => {
    axios.delete(`http://localhost:8080/events/${eventId}`).then(() => {
      let newEventList = [...eventList];
      console.log("should delete this event", eventId);
      newEventList = newEventList.filter((eventItem) => {
        return eventItem.id !== eventId;
      });
      setEventList(newEventList);
    });
  };
  console.log(newLocation);
  const createEventForm = newLocation ? (
    <CreateEvent
      location={newLocation}
      onCancelEvent={resetNewEvent}
      onCreateEvent={onCreateEvent}
    />
  ) : (
    <div className="create-event">
      <div className=" create-event__container">
        <Button
          style={{
            marginTop: 20,
            backgroundColor: "#FCCA42",
            padding: 15,
          }}
          onClick={allowCreateHandler}
          variant="contained"
          color={"primary"}
          className="create-event__button"
        >
          Create New Event
        </Button>
        {!allowCreating && (
          <div className=" create-event__instructions">Expand Your Circle</div>
        )}

        {allowCreating && !newLocation && (
          <div className=" create-event__instructions">
            Pick A Location For Your Event
          </div>
        )}
        {!isLoggedIn && message && (
          <div className=" create-event__instructions">{message}</div>
        )}
        {!isLoggedIn && message && (
          <Button
            style={{
              marginTop: 20,
              backgroundColor: "#FCCA42",
              padding: 15,
            }}
            onClick={() => history.push("/signin")}
            variant="contained"
            color={"primary"}
            className="create-event__button"
          >
            Sign in
          </Button>
        )}
        {/* {allowCreating && newLocation && (
          // <div className=" create-event__instructions">
          //   Complete The Event Information
          // </div>
        )} */}
      </div>
    </div>
  );

  return (
    <div style={{ width: "100%" }}>
      <Grid container>
        <Grid className="below-header" item xs={12}>
          <Paper style={{ boxShadow: "none" }}>
            <Hero />
          </Paper>
        </Grid>

        <Grid item display={{ xs: "block", sm: "none" }}>
          {createEventForm}
        </Grid>
        <Grid className={classes.root} item lg={8} xs={12} sm={8}>
          <GoogleMapsReact
            onMapClick={onMapClick}
            newLocation={newLocation}
            eventList={eventList}
            onDeleteEvent={handleDeleteEvent}
          />
        </Grid>
        <Grid item display={{ xs: "none", sm: "block" }} sm={4}>
          {createEventForm}
        </Grid>
      </Grid>
    </div>
  );
}
