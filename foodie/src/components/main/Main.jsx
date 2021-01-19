import React from "react";
import "./Main.css";
import Home from "../../pages/Home";
import { Route, Switch } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
