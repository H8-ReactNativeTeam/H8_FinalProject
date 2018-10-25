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

class Explore extends Component {
  // constructor(props) {
  //   super(props);
  // }

  goToDetailProduct() {
    Actions.detailProduct();
  }
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
          <View style={styles.subContainer}>
            <Text style={styles.subTitle}>
              Detail Room
            </Text>

            <View style={styles.exploreContainer}>
              <TouchableOpacity onPress={ () => this.goToDetailProduct() }>
                <ProductCard title="Homes" image={Images.EXPLORE_HOMES}>
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
                </ProductCard>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.goToDetailProduct() }>
                <ProductCard title="Homes" image={Images.HOME_ONE}>
                  <Text style={styles.productSubTitle}>Treehouse</Text>
                  {/* <Text>{`\n`}</Text> */}
                  <Text style={styles.productTitle}>Secluded Intown Treehouse</Text>
                  {/* <Text>{`\n`}</Text> */}
                  <Text>150.000 IDR per night</Text>
                  {/* <Text>{`\n`}</Text> */}
                  <Rating
                    style={{marginTop:10}}
                    imageSize={20}
                    readonly
                    startingValue={5}
                  />
                </ProductCard>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.goToDetailProduct() }>
                <ProductCard title="Homes" image={Images.HOME_TWO}>
                  <Text style={styles.productSubTitle}>Highest value Apartment studio</Text>
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
                </ProductCard>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.goToDetailProduct() }>
                <ProductCard title="Homes" image={Images.EXPLORE_HOMES}>
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
                </ProductCard>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{paddingTop: 50, height: 50, backgroundColor: "#F5FCFF",}}>
            <Text>&copy; 2018</Text>
          </View>

          {/* <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "green",
              width: 120,
              height: 60,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={Actions.login}
          >
            <Text>Back to Login</Text>
          </TouchableOpacity>
          <Text>Ini Home</Text> */}
        </ScrollView>
      </View>
    );
  }
}

export default Explore;
