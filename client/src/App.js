// import "./App.scss";
// import { Map, WrappedMap } from "./components/Map/Map";
import SignIn from "./components/SignIn/SignIn";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "./components/GoogleMap/GoogleMap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JoyninMap from "./components/Map/Map";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import AllEventsList from "./components/AllEventsList/AllEventsList";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { amber, blueGrey } from "@mui/material/colors";
import { colors } from "@material-ui/core";
import CreateEvent from "./components/CreateEvent/CreateEvent";

export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#607d8b",
    },
    secondary: {
      main: "#ffc107",
    },
  },
});

const render = (status) => {
  return <h1>{status}</h1>;
};
const vancouver = {
  lat: 49.2600767,
  lng: -123.1269348,
};
function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Router>
        <Switch>
          <Route path={"/"} exact>
            <Header />
            <Home />
          </Route>
          <Route path={"/eventlist"}>
            <Header />
            <AllEventsList />
          </Route>
          <Route path={"/profile"}>
            <Header />
            profile page here
          </Route>
          <Route path={"/signin"}>
            <SignIn />
          </Route>
          <Route path={"/createevent"}>
            <Header />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
