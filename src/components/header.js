import React from "react";
import "antd/dist/antd.css";
import "../block/sidebar.css";
import {
    HomeOutlined,

} from "@ant-design/icons";

class Header extends React.Component {
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
            <div className="site-layout-background" style={{ padding: 0 }}>
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
            </div>
    );
  }
}
export default Header;
