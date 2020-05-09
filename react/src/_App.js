import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import { authCheckState } from "./store/actions/auth";
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = {
  authCheckState
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
