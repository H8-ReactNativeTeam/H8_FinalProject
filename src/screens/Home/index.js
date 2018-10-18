import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { List, ListItem, Image, Icon } from "react-native-elements";
import styles from "./style";
import { HOME_TOP } from '../../images';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.homeTopView }>
          <Icon name="github" type="font-awesome" size={80} color="#fff" />

          <Text style={ styles.homeTop }>
            Book unique homes and experiences.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Text style={ styles.subTitle }>
            Explore
          </Text>

          <View style={styles.exploreContainer}>
            <View style={styles.exploreCard}>
              <View style={styles.exploreCardContent}>
                <Text style={ styles.exploreCardTitle }>
                  Homes
                </Text>
              </View>
            </View>
            <View style={styles.exploreCard}>
              <View style={styles.exploreCardContent}>
                <Text style={ styles.exploreCardTitle }>
                  Experiences
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.subContainer}>
          <Text style={ styles.subTitle }>
            Homes around Jakarta
          </Text>

          <View style={styles.exploreContainer}>
            <View style={styles.exploreCard}>
              <View style={styles.exploreCardContent}>
                <Text style={ styles.exploreCardTitle }>
                  Home 1
                </Text>
              </View>
            </View>
            <View style={styles.exploreCard}>
              <View style={styles.exploreCardContent}>
                <Text style={ styles.exploreCardTitle }>
                  Home 2
                </Text>
              </View>
            </View>
            <View style={styles.exploreCard}>
              <View style={styles.exploreCardContent}>
                <Text style={ styles.exploreCardTitle }>
                  Home 3
                </Text>
              </View>
            </View>
            <View style={styles.exploreCard}>
              <View style={styles.exploreCardContent}>
                <Text style={ styles.exploreCardTitle }>
                  Home 4
                </Text>
              </View>
            </View>
            <View style={styles.exploreCard}>
              <View style={styles.exploreCardContent}>
                <Text style={ styles.exploreCardTitle }>
                  Home 5
                </Text>
              </View>
            </View>
            <View style={styles.exploreCard}>
              <View style={styles.exploreCardContent}>
                <Text style={ styles.exploreCardTitle }>
                  Home 6
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
      </View>
    );
  }
}

export default Home;
