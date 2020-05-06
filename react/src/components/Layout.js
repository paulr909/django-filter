import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header, Content } = Layout;

const CustomLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/">Django React Filter Form</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff" }}>
          {children}
          <br />
        </div>
      </Content>
    </Layout>
  );
};

export default CustomLayout;
