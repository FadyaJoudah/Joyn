// import "./App.scss";
// import { Map, WrappedMap } from "./components/Map/Map";

import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "./components/GoogleMap/GoogleMap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JoyninMap from "./components/Map/Map";
import Home from "./pages/Home/Home";
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
      <h1>nav</h1>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/profile"}>
          <h2>Profile</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
