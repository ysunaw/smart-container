import React, { Component } from "react";
import {
  DatePickerIOS,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch
} from "react-native";

import { Button, Picker } from "antd-mobile-rn";
import moment from "moment";
import { WebBrowser } from "expo";

const DATA = {
  time: 1234567,
  message: "This is you wake up message"
};

Alarm = ({ time }) => {
  const duration = moment.duration(time);
  return (
    <Text style={styles.alarm}>
      {duration.minutes()}:{duration.seconds()}
    </Text>
  );
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
    header: null
  };

  state = {
    chosenDate: new Date()
  };

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.getStartedText}>Morning Tide</Text>
          <SwitchRow text="Alarm on/off" />
          <Text>Wake Up Time</Text>
          <Alarm time={DATA.time} />
          <Button>Change</Button>
          <DatePickerIOS
            date={this.state.chosenDate}
            onDateChange={this.setDate}
          />
          <SwitchRow text="Automatic Supply Purchase" />
          <SwitchRow text="Reminder for the Morning" />
        </View>
      </ScrollView>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
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
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  switchrow: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-evenly",
    marginTop: 20,
    marginBottom: 20
  },
  alarm: {
    fontSize: 76,
    fontWeight: "200"
  }
});
