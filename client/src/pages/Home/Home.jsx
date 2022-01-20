// import { Avatar } from "@mui/material";
import "./Home.scss";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(25),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    root: {
      flexGrow: 1,
    },
    myStyle: {
      padding: theme.spacing(60, 20, 60, 20),
      // backgroundColor:
    },
  })
);

export default function Home() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%", backgroundColor: "pink", padding: "1px" }}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={12}>
          <Paper className={classes.paper}>below header</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.myStyle}>map</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.myStyle}>1/2 Size</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
