import React from "react";
import { Switch, Route } from "react-router-dom";
import  Register from "./../pages/Register/Register";
import  Login from "./../pages/Login/Login";
import  Dashboard from "./../pages/Dashboard/DashboardAdmin";
import Checkout from "./../pages/checkout/Checkout";
import Header from "../component/header/Header";
import Footer from "../component/Footer/Footer";
import Book from "../component/Book/Book";
import Store from "../pages/Store/Store";
import OrderSummary from "../pages/orderSummary/OrderSummary";
import Profile from "./../pages/profile/Profile";
import {PrivateRoute} from "./privateroute"

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/header" component={Header}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/footer" component={Footer}/>
      <Route path="/book" component={Book}/>
      <Route path="/store" component={Store}/>
      <Route path="/orderSummary" component={OrderSummary}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
  );
}

export default Routes;
