import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import { Welcome, Home, Login, Register } from "@screens";

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="welcome" component={Welcome} />
          <Scene key="login" component={Login} />
          <Scene key="home" component={Home} />
          <Scene key="register" component={Register} initial />
        </Scene>
      </Router>
    );
  }
}

export default App;
