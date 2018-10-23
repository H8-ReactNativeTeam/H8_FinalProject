import React, { Component } from 'react';
import { View, Image } from "react-native";
import { Card } from "react-native-elements";
import styles from "./style";

class ProductCard extends Component {
  render() {
    return (
      <Card containerStyle={styles.exploreScrollCard}>
        <Image
          style={styles.cardInImage}
          // source={Images.EXPLORE_HOMES}
          source={this.props.image}
          resizeMode={'cover'}
        />
        <View style={styles.cardContent}>
          {this.props.children}
        </View>
      </Card>
    );
  }
}

export default ProductCard;