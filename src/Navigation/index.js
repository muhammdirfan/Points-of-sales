import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../Components/Login/Login.js";
import Signup from "../Components/Signup/Signup.js";
import Dashboard from "../Layout/Dashboard/index.js";
import ChooseBuissness from "../Layout/ChooseBuissness/index.js";
const Routing = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/ChooseBuissness" component={ChooseBuissness} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/ChooseBuissness" />
        </Switch>
    </BrowserRouter>

  );
};

export default Routing;
