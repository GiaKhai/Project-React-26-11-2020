import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { layout, Menu, Button, Layout } from "antd";
import {
  MenuUnfoldOutlined,
  SnippetsOutlined,
  DesktopOutlined,
  StarOutlined,
  HomeOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <div className="container">
          <Header>
            <Button
              className={
                this.state.collapsed ? "btn-size-menu2" : "btn-size-menu"
              }
              type="primary"
              onClick={this.toggleCollapsed}
              style={{ marginBottom: 0 }}
            >
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : ArrowLeftOutlined
              )}
            </Button>
            <div className="search">
              <input
                type="text"
                name="search"
                placeholder="What can I help you to find ?"
              />
              <div className="avatar-img">
                <HomeOutlined />
              </div>
            </div>
          </Header>
          <Layout>
            <Menu>
              <div className={this.state.collapsed ? "menu2" : "menu1"}>
                <Menu
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                  theme="light"
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
              </div>
            </Menu>
          </Layout>
          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </div>
      </Layout>
    );
  }
}

export default App;
