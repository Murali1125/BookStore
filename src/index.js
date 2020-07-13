import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Router, Route } from "react-router-dom";
import Routes from "./service/routes";
import history from "./service/history";
import AdminDashboard from "./pages/Dashboard/DashboardAdmin"
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router history={history}>
      <Route path="/dashboard" component={AdminDashboard} />
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
