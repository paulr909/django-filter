import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import CustomLayout from "./containers/Layout";
import "antd/dist/antd.css";
import "./style.css";

const App = () => {
  return (
    <Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </Router>
  );
};

export default App;
