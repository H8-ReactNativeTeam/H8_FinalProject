import React, { Component } from 'react';
import { Text, Image } from "react-native";
import { Card } from "react-native-elements";
import styles from "./style";

class ExploreCard extends Component {
  render() {
    return (
      <Card containerStyle={styles.exploreScrollCard}>
        <Image
          style={styles.cardInImage}
          // source={Images.EXPLORE_HOMES}
          source={this.props.image}
          resizeMode={'cover'}
        />
        <Text style={styles.cardTitle}>
          {this.props.title}
        </Text>
      </Card>
    );
  }
}

export default ExploreCard;
