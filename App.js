import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import { Home, Login, Register } from "@screens";

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="login" component={Login} initial />
          <Scene key="home" component={Home} />
          <Scene key="register" component={Register} />
        </Scene>
      </Router>
    );
  }
}

export default App;
