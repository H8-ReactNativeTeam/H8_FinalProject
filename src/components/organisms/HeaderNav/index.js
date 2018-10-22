import React, { Component } from 'react';
import { View } from "react-native";
import { Header } from "react-native-elements";
import styles from "./style";

class HeaderNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Header
          style={styles.headerNav}
          outerContainerStyles={{
            borderBottomWidth: 0,
            // marginTop: -10,
            backgroundColor: '#007D8C',
          }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'AIRBNB', style: { color: '#fff' } }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>
    );
  }
}

export default HeaderNav;
