import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { Icon, Rating } from "react-native-elements";
import { 
  ExploreCard, 
  ProductCard 
} from "@molecules";
import styles from "./style";
import {
  Images,
} from '@constants';
import { ActionConst } from "react-native-router-flux";

class DetailProduct extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <View>
        <Icon
          raised
          name='chevron-left'
          type='font-awesome'
          // color='#f50'
          onPress={() => Actions.home() } 
        />
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            style={styles.cardInImage}
            source={Images.EXPLORE_HOMES}
            resizeMode={'cover'}
          />

          <View style={{ padding: 15 }}>
          <Text style={styles.productSubTitle}>Entire Apartment</Text>
            {/* <Text>{`\n`}</Text> */}
            <Text style={styles.productTitle}>Great Apartment in Jakarta</Text>
            {/* <Text>{`\n`}</Text> */}
            <Text>200.000 IDR per night</Text>
            {/* <Text>{`\n`}</Text> */}
            <Rating
              style={{marginTop:10}}
              imageSize={20}
              readonly
              startingValue={5}
            />

            <Text style={{ marginTop: 20 }}>
              This place is the most budget and highest value apartment in jakarta located in tifolia apartment pulomas jakarta, 5 minutes from kelapa gading. Exactly in the front of the apartment is the busway station.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DetailProduct;
