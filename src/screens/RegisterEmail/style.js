import { Dimensions } from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#007D8C",
    color: "white",
    paddingHorizontal: 30
  },
  icon: {
    fontSize: 30,
    color: "white",
    alignSelf: "flex-start"
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "left"
  },
  label: {
    color: "white",
    fontSize: 20,
    marginLeft: 0,
    marginRight: 0
  },
  textInput: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "white",
    fontSize: 20,
    color: "white",
    height: 60,
    width: width - 50,
    marginLeft: -20,
    marginRight: 0,
    marginBottom: 20
  },
  textPromo: {
    fontSize: 16,
    color: "white",
    marginLeft: -5,
    marginBottom: 10
  }
};

export default styles;
