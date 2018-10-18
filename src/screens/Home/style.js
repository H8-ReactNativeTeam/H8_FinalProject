const styles = {
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#F5FCFF"
  },
  subContainer: {
    padding: 15,
    marginBottom: 50,
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
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 15,
    maxHeight: 250,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  exploreContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: -10,
    marginRight: -10,
    flexWrap: "wrap",
  },
  exploreCard: {
    padding: 10,
    flexWrap: "wrap",
    width: '50%',
    marginBottom: 40,
  },
  exploreCardContent: {
    minHeight: 50,
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
  },
};

export default styles;
