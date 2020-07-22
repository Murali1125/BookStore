import React from "react";
import { Switch, Route } from "react-router-dom";
import  Register from "./../pages/Register/Register";
import  Login from "./../pages/Login/Login";
import  Dashboard from "./../pages/Dashboard/DashboardAdmin";
import Checkout from "./../pages/checkout/Checkout";
import Store from "../pages/Store/Store";
import OrderSummary from "../pages/orderSummary/OrderSummary";
import Profile from "./../pages/profile/Profile";
import {PrivateRoute} from "./privateroute"

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <PrivateRoute path="/dashboard" component={Dashboard}/>
      <PrivateRoute path="/orderSummary" component={OrderSummary}/>
      <PrivateRoute path="/checkout" component={Checkout}/>
      <Route path="/" component={Store}/>
    </Switch>
  );
}

export default Routes;
