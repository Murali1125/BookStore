import React from "react";
import { Switch } from "react-router-dom";
import Register from "./../pages/Register/Register";
import Login from "./../pages/Login/Login";
import Dashboard from "./../pages/Dashboard/DashboardAdmin";
import Checkout from "./../pages/checkout/Checkout";
import Store from "../pages/Store/Store";
import OrderSummary from "../pages/orderSummary/OrderSummary";
import Profile from "./../pages/profile/Profile";
import { CustomerRoute, AdminRoute, PublicRoute } from "./privateroute";

function Routes() {
  return (
    <Switch>
      <PublicRoute path="/register" component={Register} />
      <PublicRoute path="/login" component={Login} />
      <CustomerRoute path="/profile" component={Profile} />
      <AdminRoute path="/dashboard" component={Dashboard} />
      <CustomerRoute path="/orderSummary:Summary" component={OrderSummary} />
      <CustomerRoute path="/checkout" component={Checkout} />
      <PublicRoute path="/" component={Store} />
    </Switch>
  );
}

export default Routes;
