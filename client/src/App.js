import "./App.scss";
import React from "react";
import SignIn from "./components/SignIn/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import AllEventsList from "./components/AllEventsList/AllEventsList";
import { myTheme } from "./components/Theme/MyTheme";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Router>
        <Switch>
          <Route path={"/landing"} exact>
            <LandingPage />
          </Route>
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
