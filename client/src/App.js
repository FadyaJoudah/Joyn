import "./App.scss";
import SignIn from "./components/SignIn/SignIn";
import { Wrapper } from "@googlemaps/react-wrapper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import AllEventsList from "./components/AllEventsList/AllEventsList";
import { colors } from "@material-ui/core";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import { myTheme } from "./components/Theme/MyTheme";

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
