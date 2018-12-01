import React, { Component } from "react";
import { Button, DatePickerIOS, Text, View } from "react-native";

export default class TimeScreen extends Component {
  static navigationOptions = {
    title: "Change Wakeup Time",
    headerRight: <Button title="Save" onPress={() => console.log("pressed")} />
  };

  state = {
    chosenDate: new Date()
  };

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  render() {
    return (
      <View>
        <DatePickerIOS
          mode="time"
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
        <Text>{this.state.chosenDate.toLocaleTimeString()}</Text>
      </View>
    );
  }
}
