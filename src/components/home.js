/** @format */

import React from "react";
import "antd/dist/antd.css";
import "../block/product.css";
import { Row, Col, Tabs, Switch } from "antd";
import { StarOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

class Home extends React.Component {
  render() {
    return (


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
            
    );
  }
}
export default Home;
