import "./App.scss";
import React, { useState } from "react";
import SignIn from "./components/SignIn/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import AllEventsList from "./components/AllEventsList/AllEventsList";
import { myTheme } from "./components/Theme/MyTheme";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const userSession = localStorage.getItem("user");
  const [user, setUser] = useState(
    userSession ? JSON.parse(userSession) : undefined
  );
  const handleOnSignIn = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const header = <Header user={user} />;
  return (
    <ThemeProvider theme={myTheme}>
      <Router>
        <Switch>
          <Route path={"/landing"} exact>
            <LandingPage />
          </Route>
          <Route path={"/"} exact>
            {header}
            <Home />
          </Route>
          <Route path={"/eventlist"}>
            {header}
            <AllEventsList />
          </Route>
          <Route path={"/profile"}>
            {header}
            profile page here
          </Route>
          <Route path={"/signin"}>
            <SignIn onSignIn={handleOnSignIn} />
          </Route>
          <Route path={"/createevent"}>{header}</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
