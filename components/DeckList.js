import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDeckList } from "../actions";
import Deck from "./Deck";

class DeckList extends Component {
  componentDidMount() {
    getDecks().then(decks => this.props.dispatch(receiveDeckList(decks)));
  }

  render() {
    const { decks } = this.props;
    console.log(decks);
    return (
      <View>
        <Text>Deck List </Text>
        <Deck />
      </View>
    );
  }
}
const mapStateToProps = decks => {
  return {
    decks
  };
};
export default connect(mapStateToProps)(DeckList);
