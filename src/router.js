import React from "react";
import { Switch, Route,} from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Home from "./components/home"
import { Layout } from "antd";
import Product from "./components/product";
import Contents from "./components/contents";
import Favorite from "./components/favorite";


const { Content } = Layout;

class Routes extends React.Component {
    render() {
        return (
          <Layout>
            <Sidebar />
            <Layout>
              <Header />
              <Content>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/product" component={Product} />
                  <Route exact path="/content" component={Contents} />
                  <Route exact path="/favorite" component={Favorite} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        );
    }


}    
export default Routes;