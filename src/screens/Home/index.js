import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
// import { Actions } from "react-native-router-flux";
import { List, ListItem, Icon, Card } from "react-native-elements";
import { HeaderNav } from "@organisms";
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
          <View style={styles.homeTopView}>
            <Image
              style={{ position: 'absolute', height: 300, width: '100%' }}
              source={Images.HOME_TOP}
            />
            <View style={{ padding: 15, backgroundColor: 'rgba:(0,0,0,0.5)' }}>
              <Icon name="github" type="font-awesome" size={80} color="#fff" />
              <Text style={styles.homeTop}>
                Book unique homes and experiences.
              </Text>
            </View>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.subTitle}>
              Explore
            </Text>

            {/* <View style={{ flex: 1 }}>
              <Card style={{ paddingLeft: 0 }}>
                <View style={styles.user}>
                  <Image
                    style={{ width: '100%', minHeight: 300, maxHeight: 300  }}
                    source={Images.HOME_TOP}
                  />
                  <Text>Homes</Text>
                </View>
              </Card>
              <Card>
                <View style={styles.user}>
                  <Image
                    style={{ height: 300, width: '100%' }}
                    source={Images.HOME_TOP}
                  />
                  <Text>Homes</Text>
                </View>
              </Card>
            </View> */}

            <View style={styles.exploreContainer}>
              <View style={styles.exploreCard}>
                <View style={styles.exploreCardContent}>
                  <Image
                    style={styles.imageFluid}
                    source={Images.HOME_TOP}
                    resizeMode="cover"
                  />
                  <Text style={styles.exploreCardTitle}>
                    Homes
                  </Text>
                </View>
              </View>
              <View style={styles.exploreCard}>
                <View style={styles.exploreCardContent}>
                  <Image
                    style={styles.imageFluid}
                    source={Images.HOME_TOP}
                    resizeMode="cover"
                  />
                  <Text style={styles.exploreCardTitle}>
                    Experiences
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.subTitle}>
              Homes around Jakarta
            </Text>

            <View style={styles.exploreContainer}>
              <View style={styles.exploreCard}>
                <View style={styles.exploreCardContent}>
                  <Image
                    style={styles.imageFluid}
                    source={Images.HOME_TOP}
                    resizeMode="cover"
                  />
                  <Text style={styles.exploreCardTitle}>
                    Homes
                  </Text>
                </View>
              </View>
              <View style={styles.exploreCard}>
                <View style={styles.exploreCardContent}>
                  <Image
                    style={styles.imageFluid}
                    source={Images.HOME_TOP}
                    resizeMode="cover"
                  />
                  <Text style={styles.exploreCardTitle}>
                    Homes
                  </Text>
                </View>
              </View>
              <View style={styles.exploreCard}>
                <View style={styles.exploreCardContent}>
                  <Image
                    style={styles.imageFluid}
                    source={Images.HOME_TOP}
                    resizeMode="cover"
                  />
                  <Text style={styles.exploreCardTitle}>
                    Homes
                  </Text>
                </View>
              </View>
              <View style={styles.exploreCard}>
                <View style={styles.exploreCardContent}>
                  <Image
                    style={styles.imageFluid}
                    source={Images.HOME_TOP}
                    resizeMode="cover"
                  />
                  <Text style={styles.exploreCardTitle}>
                    Homes
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* <Image
            source={ HOME_TOP }
          /> */}

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
