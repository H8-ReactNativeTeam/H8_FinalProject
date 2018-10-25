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

class RegisterName extends Component {
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

  goWelcome() {
    Actions.welcome();
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name="arrow-back" iconStyle={styles.iconBack} onPress={ () => this.goWelcome() } />
        <Text style={styles.title}>What's your name?</Text>
        <FormLabel labelStyle={styles.label}>FIRST NAME</FormLabel>
        <FormInput inputStyle={styles.textInput} onChangeText={null} />
        <FormLabel labelStyle={styles.label}>LAST NAME</FormLabel>
        <FormInput
          onChangeText={e => this.handleChangeLast(e)}
          inputStyle={styles.textInput}
        />
        <Icon
          name="chevron-with-circle-right"
          type="entypo"
          iconStyle={styles.iconNext}
          onPress={Actions.registerEmail}
        />
      </View>
    );
  }
}

export default RegisterName;
