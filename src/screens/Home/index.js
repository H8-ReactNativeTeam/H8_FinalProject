import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
// import { Actions } from "react-native-router-flux";
import { Icon, Rating } from "react-native-elements";
import { HeaderNav } from "@organisms";
import { 
  ExploreCard, 
  ProductCard 
} from "@molecules";
import styles from "./style";
import {
  Images,
} from '@constants';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <View>
        <HeaderNav />

        <ScrollView contentContainerStyle={styles.container}>
          <Image
            style={{ position: 'absolute', height: 250, width: '100%' }}
            source={Images.HOME_TOP}
          />
          <View style={styles.homeTopView}>
            <Icon name="github" type="font-awesome" size={80} color="#fff" />
            <Text style={styles.homeTop}>
              Book unique homes and experiences.
            </Text>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.subTitle}>
              Explore
            </Text>

            <ScrollView horizontal={true} contentContainerStyle={styles.exploreScrollContainer}>
              <ExploreCard title="Homes" image={Images.EXPLORE_HOMES} />
              <ExploreCard title="Experiences" image={Images.EXPLORE_EXPERIENCES} />
              <ExploreCard title="Restaurants" image={Images.EXPLORE_RESTAURANTS} />
            </ScrollView>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.subTitle}>
              Homes around Jakarta
            </Text>

            <View style={styles.exploreContainer}>
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

export default Home;
