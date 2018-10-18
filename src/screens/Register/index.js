import React, { Component } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  Icon,
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

  handleChangeFirst(text) {
    this.setState({
      firstName: text
    });
  }

  handleChangeLast(text) {
    this.setState({
      lastName: text
    });
  }

  handleLoginPress() {
    Actions.home();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What's your name?</Text>
        <Text style={styles.label}>FIRST NAME</Text>
        <TextInput
          onChangeText={e => this.handleChangeFirst(e)}
          style={styles.textInput}
        />
        <Text style={styles.label}>LAST NAME</Text>
        <TextInput
          onChangeText={e => this.handleChangeLast(e)}
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
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;
