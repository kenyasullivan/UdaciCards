import React, { Component } from "react";
import { Alert, Text, View } from "react-native";
import Button from "./Button";

class CreateDeck extends Component {
  state = {
    title: ""
  };

  render() {
    return (
      <View>
        <Text> Create Deck Page </Text>
        <Button />
      </View>
    );
  }
}

export default CreateDeck;
