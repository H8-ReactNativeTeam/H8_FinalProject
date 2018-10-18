import { Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');

const styles = {
  container: {
    // // justifyContent: "center",
    // // alignItems: "center",
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "flex-start",
    backgroundColor: "#F5FCFF"
  },
  subContainer: {
    padding: 15,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  textInput: {
    borderWidth: 1,
    borderColor: "mediumaquamarine",
    height: 45,
    width: 300,
    padding: 5,
    marginBottom: 22
  },
  homeTop: {
    fontSize: 24,
    maxWidth: 200,
    color: 'white',
  },
  homeTopView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    // padding: 15,
    height: 250,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  exploreContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: -10,
    marginRight: -10,
    flexWrap: "wrap",
  },
  exploreCard: {
    padding: 10,
    // flex: 1/2,
    marginBottom: 60,
    height: 150,
    width: '50%',
  },
  exploreCardContent: {
    // minHeight: 50,
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  exploreCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  imageFluid: {
    // width: width/2,
    width: '100%',
    height: '100%',
  }
};

export default styles;
