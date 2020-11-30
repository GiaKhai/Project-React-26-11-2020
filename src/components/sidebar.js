/** @format */

import React from "react";
import "antd/dist/antd.css";
import "../block/sidebar.css"
import { Layout, Menu, Button} from "antd";
import {
  MenuUnfoldOutlined,
  ArrowLeftOutlined,
  HomeOutlined,
  DesktopOutlined,
  SnippetsOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const {Sider } = Layout;


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
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <Button
          className={this.state.collapsed ? "btn-size-menu2" : "btn-size-menu"}
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
          defaultSelectedKeys={["1"]}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link exact to="/">
              HOME
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link exact to="/product">PRODUCT</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SnippetsOutlined />}>
            <Link exact to="/content">
              CONTENT
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<StarOutlined />} to="/favorite">
            <Link exact to="/favorite">
              FAVORITES
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
