import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Actions, Router, Scene } from "react-native-router-flux";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import styles from "./style";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChangeEmail(text) {
    this.setState({
      email: text
    });
  }

  handleChangePassword(text) {
    this.setState({
      password: text
    });
  }

  handleLoginPress() {
    Actions.home();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={e => this.handleChangeEmail(e)}
          placeholder={"user@email.com"}
          style={styles.textInput}
        />
        <TextInput
          onChangeText={e => this.handleChangePassword(e)}
          secureTextEntry={true}
          placeholder={"Your super secret password"}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "green",
            width: 120,
            height: 60,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => this.handleLoginPress()}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;
