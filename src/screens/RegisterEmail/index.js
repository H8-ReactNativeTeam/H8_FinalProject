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
        <Text style={styles.title}>And, your email?</Text>
        <FormLabel labelStyle={styles.label}>EMAIL ADDRESS</FormLabel>
        <FormInput inputStyle={styles.textInput} onChangeText={null} />
        <Text style={styles.textPromo}>
          I'd like to receive promotional communications, including discounts,
          surveys, inspiration, and love from Airbnb via email, SMS, and phone.
        </Text>
        <Text style={styles.textPromo}>
          I don't want to receive marketing messages from Airbnb. I can opt out
          of receiving these at any time in my account settings or via the link
          in the message.
        </Text>
      </View>
    );
  }
}

export default RegisterEmail;
