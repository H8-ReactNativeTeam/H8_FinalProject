import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { List, ListItem } from "react-native-elements";
import styles from "./style";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "green",
            width: 120,
            height: 60,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={Actions.login}
        >
          <Text>Back to Login</Text>
        </TouchableOpacity>
        <Text>Ini Home</Text>
      </View>
    );
  }
}

export default Home;
