// import "./App.scss";
// import { Map, WrappedMap } from "./components/Map/Map";
import SignIn from "./components/SignIn/SignIn";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "./components/GoogleMap/GoogleMap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JoyninMap from "./components/Map/Map";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
const render = (status) => {
  return <h1>{status}</h1>;
};
const vancouver = {
  lat: 49.2600767,
  lng: -123.1269348,
};
function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <Header />
          <Home />
        </Route>
        <Route path={"/profile"}>
          <Header />
          profile page here
        </Route>
        <Route path={"/signin"}>
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
