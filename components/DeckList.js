import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDeckList } from "../actions";
import { blue, gray, white } from "../utils/colors";
import Deck from "./Deck";

class DeckList extends Component {
  componentDidMount() {
    getDecks().then(decks => this.props.dispatch(receiveDeckList(decks)));
  }

  render() {
    const { decks } = this.props;
    // console.log(this.props);
    if (Object.keys(decks).length === 0) {
      return (
        <View>
          <Text>
            Uh oh! You do not have any flashcards. Get started below.{" "}
          </Text>
          {/* <PrimaryButton
        onPress={() => this.props.navigation.navigate('CreateDeck')}
      >
        <PrimaryButtonText>Create your first deck</PrimaryButtonText>
      </PrimaryButton> */}
        </View>
      );
    }

    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        {Object.keys(decks).map(key => {
          {
            /* const { title, questions } = decks[key]; */
          }
          const deck = this.props.decks[key];
          return (
            <View key={key}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("DeckDetails", { title: key })}
              >
                <Deck deck={deck} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = decks => {
  return {
    decks
  };
};
export default connect(mapStateToProps)(DeckList);
