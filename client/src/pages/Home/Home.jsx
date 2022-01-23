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

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(20, 18),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    root: {
      flexGrow: 1,
    },
    myStyle: {
      padding: theme.spacing(1),
      height: theme.spacing(50),
    },
  })
);

export default function Home() {
  const [newLocation, setNewLocation] = useState();
  const [allowCreating, setAllowCreating] = useState(false);

  const classes = useStyles();
  function allowCreateHandler() {
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
  return (
    <div style={{ width: "100%", padding: "1px" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={"320px"}>
          <Paper className={classes.myStyle}>
            <div className="image">
              <div className="image__one">this is image1</div>
              <div className="image__two">this is image2</div>
              <div className="image__color-block">this is color block</div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <GoogleMapsReact onMapClick={onMapClick} newLocation={newLocation} />
        </Grid>
        <Grid item sm={4}>
          {newLocation ? (
            <CreateEvent location={newLocation} onCancelEvent={resetNewEvent} />
          ) : (
            <div className=" create-event__container">
              <Button
                style={{ marginTop: 20 }}
                onClick={allowCreateHandler}
                variant="contained"
                color={"primary"}
                className="create-event__button"
              >
                Create New Event
              </Button>
              {!allowCreating && (
                <div className=" create-event__instructions">
                  Expand Your Circle
                </div>
              )}

              {allowCreating && !newLocation && (
                <div className=" create-event__instructions">
                  Pick A Location For Your Event
                </div>
              )}
              {allowCreating && newLocation && (
                <div className=" create-event__instructions">
                  Complete The Event Information
                </div>
              )}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
