import React from "react";
import { Switch, Route } from "react-router-dom";
import { Register } from "./../pages/Register/Register";
import Header from "../component/header/Header";

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/header" component={Header}/>
    </Switch>
  );
}

export default Routes;
