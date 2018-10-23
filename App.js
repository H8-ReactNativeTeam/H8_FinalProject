import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import { Welcome, Home, Login, RegisterName, RegisterEmail } from "@screens";

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="welcome" component={Welcome} initial/>
          <Scene key="login" component={Login} />
          <Scene key="home" component={Home} />
          <Scene key="registerName" component={RegisterName}  />
          <Scene key="registerEmail" component={RegisterEmail} />
        </Scene>
      </Router>
    );
  }
}

export default App;
