import React from "react";
import { Switch, Route } from "react-router-dom";
import  Register from "./../pages/Register/Register";
import  Login from "./../pages/Login/Login";
import  Dashboard from "./../pages/Dashboard/DashboardAdmin";
import Checkout from "./../pages/checkout/Checkout";
import Header from "../component/header/Header";

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/header" component={Header}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/checkout" component={Checkout}/>
    </Switch>
  );
}

export default Routes;
