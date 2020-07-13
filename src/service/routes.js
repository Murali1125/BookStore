import React from "react";
import { Switch, Route } from "react-router-dom";
import  Register from "./../pages/Register/Register";
import  Login from "./../pages/Login/Login";
import  Dashboard from "./../pages/Dashboard/DashboardAdmin";
import Checkout from "./../pages/checkout/Checkout";
import Header from "../component/header/Header";
import Footer from "../component/Footer/Footer";

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/header" component={Header}/>
      <Route path="/dashboard" component={Dashboard}/>
<<<<<<< HEAD
      <Route path="/checkout" component={Checkout}/>
=======
      <Route path="/footer" component={Footer}/>
>>>>>>> 4efe70bcef6095162c46273c18303eb99bfad562
    </Switch>
  );
}

export default Routes;
