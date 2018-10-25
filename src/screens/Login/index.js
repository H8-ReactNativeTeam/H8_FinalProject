import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { FormInput, Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default class App extends Component {
  state = {
    email: "",
    password: ""
  };
  constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginPress = this.handleLoginPress.bind(this);
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
    alert(
      `Your email: ${this.state.email}. And your password: ${
        this.state.password
      }`
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.navBar}>
            {/* <Button title={"Back"}/> */}
            <View>
              <TouchableOpacity onPress={Actions.welcome}>
                <Image source={require("../../images/icons8-left-24.png")} />
              </TouchableOpacity>
            </View>
            {/* </View> */}
            {/* <View> */}
            <View>
              {/*<Text style={styles.forgotPassword}>Forgot password?</Text>
               <Icon name="rocket" size={30} color="#900" /> */}
            </View>
          </View>

          <Text style={styles.heading}>Log In</Text>

          <Text style={styles.body}>EMAIL ADDRESS</Text>

          {/* <TextInput
            onChangeText={this.handleChangeEmail}
            placeholder={"user@email.com"}
            style={styles.textInput}
          /> */}

          <FormInput inputStyle={styles.textInput} />

          <Text style={styles.body}>PASSWORD</Text>

          {/* <TextInput
            onChangeText={this.handleChangePassword}
            secureTextEntry={true}
            placeholder={"Your super secret password"}
            style={styles.textInput}
          /> */}
          <FormInput inputStyle={styles.textInput} />
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={Actions.home}>
            <Image
              source={require("../../images/icons8-next-page-30.png")}
              style={{ width: 75, height: 75 }}
            />
          </TouchableOpacity>
          {/* <Button title={"Next"} onPress={this.handleLoginPress}/> */}
          {/* <TouchableOpacity>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    // alignContent: ''
    // paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30
  },
  container: {
    flex: 1,
    backgroundColor: "#1BA49C",
    justifyContent: "space-between"
    // alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  textInput: {
    // borderColor: "mediumaquamarine",
    // height: 45,
    // width: 300,
    // padding: 5,
    // margin: 10
    // marginBottom: 22,
    //     paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "white",
    fontSize: 20,
    color: "white", //height: 60,
    width: width - 50, // marginLeft: -20, //  marginRight: 0, //  marginBottom: 20
    marginTop: 10
  },
  heading: {
    fontSize: 40,
    color: "white",
    // paddingRight: 200,
    // height: 400,
    // paddingRight: 150,
    // paddingBottom: 200,
    alignSelf: "flex-start",
    // paddingLeft: 40,
    // paddingTop: 40,
    // paddingBottom: 40,
    fontWeight: "bold",
    margin: 10,
    marginTop: 10
  },
  forgotPassword: {
    color: "white"
    // paddingLeft: 150
  },
  body: {
    // paddingTop: 20,
    color: "white",
    // paddingRight: 300,
    alignSelf: "flex-start",
    margin: 10
    // paddingBottom: 10
  },
  upperContainer: {
    margin: 10
  },
  bottomContainer: {
    // alignSelf: "flex-end",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    margin: 20
    // paddingTop: 275,
    //  paddingLeft: 250
  }
});
