import React,{ Suspense,lazy } from "react";
import { Switch } from "react-router-dom";
import Register from "./../pages/Register/Register";
import Login from "./../pages/Login/Login";
import Checkout from "./../pages/checkout/Checkout";
import OrderSummary from "../pages/orderSummary/OrderSummary";
import Profile from "./../pages/profile/Profile";
import CircularProgress from '@material-ui/core/CircularProgress';
import { CustomerRoute, AdminRoute, PublicRoute } from "./privateroute";
const AsyncDashboard = lazy(()=> import("./../pages/Dashboard/DashboardAdmin"));
const AsyncStore = lazy(()=> import("../pages/Store/Store"));

function Routes() {
  return (
    <Suspense fallback={<div style={{
              display:"flex",
              justifyContent: "center",
              margin:"400px"
            }}><CircularProgress color="secondary" /></div>}>
    <Switch>
      <PublicRoute path="/register" component={Register} />
      <PublicRoute path="/login" component={Login} />
      <CustomerRoute path="/profile" component={Profile} />
      <AdminRoute path="/dashboard" component={AsyncDashboard} />
      <CustomerRoute path="/orderSummary:Summary" component={OrderSummary} />
      <CustomerRoute path="/checkout" component={Checkout} />
      <PublicRoute path="/" component={AsyncStore} />
    </Switch>
    </Suspense>
  );
}

export default Routes;