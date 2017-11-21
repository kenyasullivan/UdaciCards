import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Deck from "./Deck";

class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>Deck List </Text>
        <Deck />
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    decks: state.decks
  };
};
export default connect(mapStateToProps)(DeckList);
