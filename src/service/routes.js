import React from "react";
import { Switch, Route } from "react-router-dom";
import  Register from "./../pages/Register/Register";
import  Login from "./../pages/Login/Login";
import  Dashboard from "./../pages/Dashboard/DashboardAdmin";
import Header from "../component/header/Header";
import Footer from "../component/Footer/Footer";

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/header" component={Header}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/footer" component={Footer}/>
    </Switch>
  );
}

export default Routes;
