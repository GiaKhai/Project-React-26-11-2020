import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./router"

class App extends React.Component {

  render() {
    return (
      <Router>
        <Routers />
      </Router>
    )
  }
}

export default App;
