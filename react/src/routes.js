import React from "react";
import { Route } from "react-router-dom";
import Form from "./components/Form";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import About from "./components/About";

import Hoc from "./hoc/hoc";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={SignUp} />
    <Route exact path="/" component={Form} />
    <Route exact path="/about" component={About} />
  </Hoc>
);

export default BaseRouter;
