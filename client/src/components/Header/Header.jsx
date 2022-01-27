import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router-dom";
import { Avatar, Box } from "@mui/material";
import axios from "axios";
import Circle from "../Circle/Circle";
import "./Header.scss";
//TODO: clean up header and change theme
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#203B4C",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar({ user }) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    history.push("/signin");
  };
  const handleSignIn = () => {
    history.push("/signin");
  };
  const isSingedIn = localStorage.getItem("token");

  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar className="header">
            <Typography
              style={{ sm: { backgroundColor: "red" } }}
              variant={"h4"}
              className={`${classes.title} "logo"`}
            >
              JOYN
              {/* <Circle /> */}
            </Typography>
            {auth && (
              <div>
                <div onClick={handleMenu}>
                  <Avatar
                    style={{ height: 70, width: 70, marginTop: 4 }}
                    className="avatar"
                    src={`https://avatars.dicebear.com/api/croodles/${
                      user ? user.username : ""
                    }.svg`}
                  />
                </div>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  {!isSingedIn && (
                    <MenuItem onClick={handleSignIn}>Sign in</MenuItem>
                  )}
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  {isSingedIn && (
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  )}
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
