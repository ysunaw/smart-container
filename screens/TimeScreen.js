import React, { Component } from "react";
import { Button, DatePickerIOS, View } from "react-native";

export default class TimeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Change Wakeup Time",
    headerRight: (
      <Button
        title="Save"
        onPress={() => {
          navigation.getParam("saveDate")(navigation.getParam("date"));
          navigation.goBack();
        }}
      />
    )
  });

  state = {
    chosenDate: this.props.navigation.getParam("date")
  };

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
    this.props.navigation.setParams({ date: newDate });
  };

  render() {
    return (
      <View>
        <DatePickerIOS
          mode="time"
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    );
  }
}
