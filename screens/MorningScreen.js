import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class MorningScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.goodMorning}> Good Morning </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  goodMorning: {
    fontSize: 50
  }
});
