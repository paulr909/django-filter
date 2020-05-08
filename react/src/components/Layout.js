import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const { Header, Content } = Layout;

const CustomLayout = ({ isAuthenticated, logout, children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item>
            <Link to="/">Django React Filter Form</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">About</Link>
          </Menu.Item>
          {isAuthenticated ? (
            <Menu.Item key="2" onClick={logout}>
              Logout
            </Menu.Item>
          ) : (
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}
          <Menu.Item>
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "20px 0" }}>
        <div style={{ background: "#fff" }}>{children}</div>
      </Content>
    </Layout>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
