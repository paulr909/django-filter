import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";

const {Header, Content, Footer} = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                        style={{lineHeight: "64px"}}>
                        <Menu.Item key="1">
                            <Link to="/">Django React Filter Form</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: "0 50px"}}>
                    <div style={{background: "#fff"}}>
                        {this.props.children}
                        <br/>
                    </div>
                </Content>
                <Footer style={{textAlign: "center"}}>
                    Django React Filter Form
                </Footer>
            </Layout>
        );
    }
}

export default CustomLayout;
