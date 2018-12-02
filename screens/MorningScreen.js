import React, { Component } from "react";
import { Image, Text, ScrollView, View, StyleSheet } from "react-native";

export default class MorningScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ScrollView
        style={styles.morningContainer}
        contentContainerStyle={styles.contentContainer}
      >
        <Image
          source={require("../assets/images/sunset.png")}
          style={styles.morningImage}
        />
        <Text style={styles.goodMorning}> Good Morning </Text>
        <View style={styles.iconRow}>
          <Image
            source={require("../assets/images/musical-note.png")}
            style={styles.iconImage}
          />
          <Image
            source={require("../assets/images/umbrella.png")}
            style={styles.iconImage}
          />
          <Image
            source={require("../assets/images/school-calendar.png")}
            style={styles.iconImage}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  morningContainer: {
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30
  },
  contentContainer: {
    alignItems: "center"
  },
  goodMorning: {
    marginTop: 100,
    fontSize: 40,
    fontWeight: "300"
  },
  morningImage: {
    width: 100,
    height: 80,
    resizeMode: "contain"
    // marginTop: 3,
    // marginLeft: -10
  },
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: "contain"
  },
  iconRow: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginTop: 100,
    marginBottom: 20
  }
});
