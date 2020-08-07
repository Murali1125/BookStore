import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import Register from "./../pages/Register/Register";
import Login from "./../pages/Login/Login";
import Dashboard from "./../pages/Dashboard/DashboardAdmin";
import Checkout from "./../pages/checkout/Checkout";
import Store from "../pages/Store/Store";
import OrderSummary from "../pages/orderSummary/OrderSummary";
import Profile from "./../pages/profile/Profile";
import { CustomerRoute, AdminRoute, PublicRoute } from "./privateroute";
import { LinearProgress } from "@material-ui/core";

const LazyStore = React.lazy(() => {
  return Promise.all([
    import("../pages/Store/Store"),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});

function Routes() {
  return (
    <Switch>
      <PublicRoute path="/register" component={Register} />
      <PublicRoute path="/login" component={Login} />
      <CustomerRoute path="/profile" component={Profile} />
      <AdminRoute path="/dashboard" component={Dashboard} />
      <CustomerRoute path="/orderSummary:Summary" component={OrderSummary} />
      <CustomerRoute path="/checkout" component={Checkout} />
      <Suspense
        fallback={
          <div
            style={{
              
             position:"fixed",
             top: "50vh",
             left:"50vw",
             transform: "translate(-50%,-50%)",
            width: 200,
              textAlign:"center",
              fontSize: 30
             
            }}
          >
            <div>Opening store</div>
            <LinearProgress color="secondary" />
          </div>
        }
      >
        <PublicRoute path="/*" component={LazyStore} />
      </Suspense>
      <PublicRoute path="/*" component={Store} />
    </Switch>
  );
}

export default Routes;
