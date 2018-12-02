import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { Button } from "antd-mobile-rn";
import { Icon } from "expo";

export default class AlarmScreen extends Component {
  static navigationOptions = {
    title: "Alarm"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Icon.AntDesign name="clockcircleo" size={70} />
          <Text style={styles.alarmText}>
            Get up and go to the washroom to stop the alarm!
          </Text>
          {/* <Button>Snooze for 10 Minutes</Button> */}
          <Button onClick={() => navigate("Morning")}>
            Snooze for 10 Minutes
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  alarmText: {
    fontSize: 35,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20
  },
  currentTime: {
    fontSize: 76,
    fontWeight: "200"
  }
});
