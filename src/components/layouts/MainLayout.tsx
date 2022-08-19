import { Breadcrumb, Layout, Menu, Image } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

import logo from "../../assets/images/emil-logo.svg";

const { Header, Content, Footer } = Layout;

function MainLayout(): JSX.Element {
    const menuItems = [
        {
            key: "home",
            label: "Home",
        },
        {
            key: "grid",
            label: "Grid",
        },
    ];
    return (
        <Layout id="main-layout">
            <Header>
                <div className="logo">
                    <Image
                        alt="Emil Group"
                        src={logo}
                        style={{ height: "100%", marginRight: 30 }}
                        preview={false}
                    />
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={menuItems}
                />
            </Header>
            <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Users</Breadcrumb.Item>
                </Breadcrumb>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Emil Grid ©2022 Created by Sohrab
            </Footer>
        </Layout>
    );
}

export default MainLayout;
