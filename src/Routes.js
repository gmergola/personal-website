import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Home";
import About from "./About";
import Contact from './Contact';

function Routes() {

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );

}

export default Routes;