import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AccountBox from "../Layout/AccountBox/index.js";
import Login from "../Components/Login/Login.js";
import Signup from "../Components/Signup/Signup.js";
import Dashboard from "../Layout/Dashboard/index.js";
import ChooseBuissness from "../Layout/ChooseBuissness/index.js";
const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/ChooseBuissness" component={ChooseBuissness} />
          <Redirect to="/ChooseBuissness" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
