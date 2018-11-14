import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "antd-mobile-rn";

export default class AlarmScreen extends React.Component {
  static navigationOptions = {
    title: "Alarm"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button>Stop</Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
