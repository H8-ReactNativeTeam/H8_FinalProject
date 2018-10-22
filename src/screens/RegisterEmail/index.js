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

class RegisterEmail extends Component {
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
        <Icon
          name="arrow-back"
          iconStyle={styles.icon}
          onPress={Actions.registerName}
        />
        <Text style={styles.title}>What's your name?</Text>
        <FormLabel labelStyle={styles.label}>FIRST NAME</FormLabel>
        <FormInput inputStyle={styles.textInput} onChangeText={null} />
        <FormLabel labelStyle={styles.label}>LAST NAME</FormLabel>
        <FormInput
          onChangeText={e => this.handleChangeLast(e)}
          inputStyle={styles.textInput}
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

export default RegisterEmail;
