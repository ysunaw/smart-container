import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch
} from "react-native";

import { Button } from "antd-mobile-rn";
import moment from "moment";

Alarm = ({ time }) => {
  const duration = moment(time);
  return <Text style={styles.alarm}>{duration.format("hh:mm A")}</Text>;
};

SwitchRow = ({ text }) => {
  return (
    <View style={styles.switchrow}>
      <Text>{text}</Text>
      <Switch />
    </View>
  );
};

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  state = {
    chosenTime: new Date(),
    message: "This is you wake up message"
  };

  saveDate = newTime => {
    this.setState({ chosenTime: newTime });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <Text style={styles.getStartedText}>Morning Tide</Text>
          <Image
            source={require("../assets/images/tide.png")}
            style={styles.welcomeImage}
          />
          <Text style={styles.timeText}>Wake Up Time</Text>
          <Alarm time={this.state.chosenTime} />
          <Button
            onClick={() =>
              navigate("TimePicker", {
                date: this.state.chosenTime,
                saveDate: this.saveDate
              })
            }
            style={styles.button}
          >
            Change
          </Button>
          <SwitchRow text="Alarm on/off" />
          <SwitchRow text="Automatic Restock" />
          <SwitchRow text="Morning Reminder" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: "center"
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center"
  },
  getStartedText: {
    fontSize: 40,
    fontWeight: "200",
    alignSelf: "center"
  },
  timeText: {
    fontSize: 20,
    marginTop: 30,
    alignSelf: "center"
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  switchrow: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20
  },
  alarm: {
    fontSize: 76,
    fontWeight: "200"
  },
  button: {
    marginBottom: 30
  }
});
