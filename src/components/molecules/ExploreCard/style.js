import { Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');

const styles = {
  cardInImage: {
    width: '100%', 
    height: 100, 
    padding: 0,
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  exploreScrollCard: {
    padding: 0,
    width: width/3,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 3,
  },
  cardTitle: {
    paddingTop: 10, 
    paddingBottom: 10, 
    paddingLeft: 15, 
    paddingRight: 15,
  }
};

export default styles;
