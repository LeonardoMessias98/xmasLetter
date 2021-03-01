import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Letter from "../pages/Letter";
import LettersList from "../pages/LettersList";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Letter} />
      <Route path="/letters" component={LettersList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
