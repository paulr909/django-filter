import React from "react";
import { Route } from "react-router-dom";
import Form from "./containers/Form";

const BaseRouter = () => <Route exact path="/" component={Form} />;

export default BaseRouter;
