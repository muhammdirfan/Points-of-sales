import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../Components/Login/Login.js";
import Signup from "../Components/Signup/Signup.js";
import ChooseBuissness from "../Layout/ChooseBuissness/index.js";
import Dashboard from "../Layout/Dashboard/index.js";
import shopDashboard from '../Layout/shopDashboard/index.js';
import Dragshop from '../Layout/DrugShop/index';

const Routing = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ChooseBuissness} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/dash1" exact component={Dashboard} />
          <Route path="/dash2" exact component={Dragshop} />
          <Route path="/dash3" exact component={shopDashboard} />
          {/* <Redirect to="/ChooseBuissness" /> */}
        </Switch> 
    </BrowserRouter>

  );
};

export default Routing;
