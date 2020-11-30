/** @format */

import React from "react";
import "antd/dist/antd.css";
import "../block/product.css";
import { Row, Col, Tabs, Switch } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";

const { TabPane } = Tabs;

class Contents extends React.Component {
  render() {
    return (
        
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
              
    );
  }
}
export default Contents;
