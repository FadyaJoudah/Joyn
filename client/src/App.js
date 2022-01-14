// import "./App.scss";
// import { Map, WrappedMap } from "./components/Map/Map";

import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "./components/GoogleMap/GoogleMap";
import JoyninMap from "./components/Map/Map";
const render = (status) => {
  return <h1>{status}</h1>;
};
const vancouver = {
  lat: 49.2600767,
  lng: -123.1269348,
};
function App() {
  return (
    <div className="App">
      <JoyninMap />
    </div>
  );
}

export default App;
