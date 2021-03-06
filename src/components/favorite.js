/** @format */

import React from "react";
import "antd/dist/antd.css";
import "../block/product.css";
import { Row, Col, Tabs, Switch } from "antd";
import { StarOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

class Favorite extends React.Component {
  render() {
    return (
      <div>
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
            <div className="tab">
              <Tabs defaultActiveKey="3" centered>
                <TabPane tab="OVERVEIW" key="1">
                  <b>This is tab 1</b>
                </TabPane>
                <TabPane tab="DESCRIPTION" key="2">
                  <b>This is tab 2</b>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      INTERNAL
                      <Switch defaultChecked />
                    </span>
                  }
                  key="3"
                >
                  <div className="content-tab3">
                    <b>Suitability</b>
                    <ul>
                      <li>
                        Văn học theo cách nói chung nhất, là bất kỳ tác phẩm nào
                        bằng văn bản.
                      </li>
                      <li>
                        Văn học theo cách nói chung nhất, là bất kỳ tác phẩm nào
                        bằng văn bản.
                      </li>
                      <li>
                        Văn học theo cách nói chung nhất, là bất kỳ tác phẩm nào
                        bằng văn bản.
                      </li>
                    </ul>
                    <b>Internal sales script</b> <br />
                    Văn học theo cách nói chung nhất, là bất kỳ tác phẩm nào
                    bằng văn bản. Hiểu theo nghĩa hẹp hơn, thì văn học là dạng
                    văn bản được coi là một hình thức nghệ thuật, hoặc bất kỳ
                    một bài viết nào được coi là có giá trị nghệ thuật hoặc trí
                    tuệ .
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Favorite;
