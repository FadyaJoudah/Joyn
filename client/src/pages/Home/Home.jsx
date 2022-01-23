// import { Avatar } from "@mui/material";
import "./Home.scss";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { blue } from "@mui/material/colors";
import CreateEvent from "../../components/CreateEvent/CreateEvent";
import GoogleMapsReact from "../../components/GoogleMapsReact/GoogleMapsReact";

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
      padding: theme.spacing(20),
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
  return (
    <div style={{ width: "100%", padding: "1px" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={"320px"}>
          <Paper className={classes.paper}>
            <div className="image">
              <div className="image__one">this is image1</div>
              <div className="image__two">this is image2</div>
              <div className="image__color-block">this is color block</div>
            </div>
          </Paper>
          <button onClick={allowCreateHandler}>Create Your Event </button>
          {allowCreating && !newLocation && (
            <div>Pick A location for your event </div>
          )}
          {allowCreating && newLocation && <div>fill the rest </div>}
        </Grid>
        <Grid item xs={12} sm={newLocation ? 8 : 12}>
          <GoogleMapsReact onMapClick={onMapClick} />
        </Grid>
        {newLocation && (
          <Grid item xs={12} sm={4}>
            <CreateEvent location={newLocation} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
