// import { Avatar } from "@mui/material";
import "./Home.scss";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { blue } from "@mui/material/colors";
import CreateEvent from "../../components/CreateEvent/CreateEvent";

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
  const classes = useStyles();

  return (
    <div style={{ width: "100%", padding: "1px" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={"320px"}>
          <Paper className={classes.paper}>below header</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ backgroundColor: "red" }} className={classes.myStyle}>
            map
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <CreateEvent />
        </Grid>
      </Grid>
    </div>
  );
}
