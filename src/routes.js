import React from "react";
import {Route} from "react-router-dom";
import Hoc from "./hoc/hoc";
import Form from "./containers/Form";

const BaseRouter = () => (
    <Hoc>
        <Route exact path="/" component={Form}/>
    </Hoc>
);

export default BaseRouter;
