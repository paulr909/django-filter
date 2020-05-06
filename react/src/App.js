import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import CustomLayout from "./components/Layout";
import "antd/dist/antd.css";
import "./style.css";

const App = props => {
  return (
    <Router>
      <CustomLayout children={props}>
        <BaseRouter />
      </CustomLayout>
    </Router>
  );
};

export default App;
