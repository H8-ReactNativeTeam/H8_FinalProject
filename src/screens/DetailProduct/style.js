import { Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');

const styles = {
  container: {
    // // justifyContent: "center",
    // // alignItems: "center",
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "flex-start",
    backgroundColor: "#F5FCFF",
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
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 15,
    height: 250,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  exploreContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: -5,
    marginRight: -5,
    flexWrap: "wrap",
  },
  exploreScrollContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    marginLeft: -5,
    marginRight: -5,
    // width: '100%',
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
  },
  headerNav: {
    borderWidthBottom: 0,
  },
  productSubTitle: {
    color: 'darkgrey',
    marginBottom: 5,
    marginTop: 10,
  },
  productTitle: {
    fontSize: 20,
  },
  cardInImage: {
    width: '100%', 
    height: 220, 
    padding: 0,
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
};

export default styles;
