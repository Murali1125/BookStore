import React from "react";
import { Switch, Route } from "react-router-dom";
import  Register from "./../pages/Register/Register";
import  Dashboard from "./../pages/Dashboard/DashboardAdmin";
import Header from "../component/header/Header";

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/header" component={Header}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Switch>
  );
}

export default Routes;
