import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Register} from './pages/Register/Register'
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AdminDashboard from './pages/Dashboard/DashboardAdmin'

ReactDOM.render(
  <React.StrictMode>
    <AdminDashboard/>
    <Router>
      <Route path="/register" component={Register} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
