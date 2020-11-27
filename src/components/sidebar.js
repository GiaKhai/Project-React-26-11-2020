/** @format */

import React from "react";
import "antd/dist/antd.css";
import "../block/sidebar.css"
import ContentComponent from "./content"
import { Layout, Menu, Button} from "antd";
import {
  MenuUnfoldOutlined,
  ArrowLeftOutlined,
  HomeOutlined,
  DesktopOutlined,
  SnippetsOutlined,
  StarOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;


class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Button
            className={
              this.state.collapsed ? "btn-size-menu2" : "btn-size-menu"
            }
            type="primary"
            onClick={this.toggleCollapsed}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : ArrowLeftOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Button>
          <Menu
            defaultSelectedKeys={["2"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              HOME
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              PRODUCT
            </Menu.Item>
            <Menu.Item key="3" icon={<SnippetsOutlined />}>
              CONTENT
            </Menu.Item>
            <Menu.Item key="4" icon={<StarOutlined />}>
              FAVORITES
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="search">
              <input
                type="text"
                name="search"
                placeholder="  What can I help you to find ?"
              />
              <div className="avatar-img">
                <HomeOutlined />
              </div>
            </div>
          </Header>
          <Content className="content">
            <ContentComponent />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Sidebar;
