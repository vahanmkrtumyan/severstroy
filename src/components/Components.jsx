import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";

export default function Components() {
  return (
    <BrowserRouter basename="/">
      <div className="page-wraper">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
