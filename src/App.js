import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import HeaderContent from "./HeaderContent"
import { Layout, Menu, Button, Row, Col, Table } from "antd";
import {
  MenuUnfoldOutlined,
  ArrowLeftOutlined,
  HomeOutlined,
  DesktopOutlined,
  SnippetsOutlined,
  StarOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const columns = [
  {
    dataIndex: "date",
    key: "date",
  },
  {
    dataIndex: "content",
    key: "content",
  },
];

const data = [
  {
    date: "14 Jul ",
    content: "abcdcddadwdawdawdawdwadwawdawdawdawdwadwaadwa",
  },
  {
    date: "14 Jul ",
    content: "abcdcddadwdawdawdawdwadwawdawdawdawdwadwaadwa",
  },
  {
    date: "14 Jul ",
    content: "abcdcddadwdawdawdawdwadwawdawdawdawdwadwaadwa",
  },
  {
    date: "14 Jul ",
    content: "abcdcddadwdawdawdawdwadwawdawdawdawdwadwaadwa",
  },
];

class App extends React.Component {
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
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
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
          <Content className="content" style={{}}>
            <div className="header-content">
              {" "}
              3 YEAR 10% YIELD NOTE ON HO CHI MINH STOCKMARKET <StarOutlined />{" "}
              <button className="btn-pre"> Pre-open </button>
              <button className="btn-struct"> Stuctured product </button>
            </div>

            <div className="left">
              <div className="top-left">
                <div className="row">
                  <Row>
                    <Col span={3}>Source</Col>
                    <Col span={4}>Risk score</Col>
                    <Col span={5}>Min. investment</Col>
                    <Col span={4}>Sales start</Col>
                    <Col span={4}>Sales close</Col>
                    <Col span={4}>
                      <button className="btn-share">Share</button>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="bottom-left">
                ACTACHMEMTS
                <Table
                  columns={columns}
                  dataSource={data}
                />
              </div>
            </div>
            <div className="right">
              <div className="top-right"></div>
              <div className="mid-right"></div>
              <div className="bottom-right"></div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
