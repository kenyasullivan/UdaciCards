import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
  // AsyncStorage
} from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDeckList } from "../actions";
import { blue, gray, white } from "../utils/colors";
import Deck from "./Deck";

class DeckList extends Component {
  componentDidMount() {
    // AsyncStorage.clear(); //clear AsyncStorage
    getDecks().then(decks => this.props.dispatch(receiveDeckList(decks)));
  }

  render() {
    const { decks } = this.props;

    if (Object.keys(decks).length === 0) {
      return (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>
            Uh oh! You do not have any flashcards. Add a Deck below.{" "}
          </Text>
        </View>
      );
    }

    return (
      <ScrollView contentContainerStyle={styles.grid}>
        {Object.keys(decks).map(title => {
          const deck = this.props.decks[title];
          return (
            <View key={title}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("DeckDetails", { title })
                }
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

const styles = StyleSheet.create({
  grid: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1
  },
  emptyListContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white"
  },
  emptyListText: {
    fontSize: 20
  }
});

const mapStateToProps = decks => {
  return {
    decks
  };
};
export default connect(mapStateToProps)(DeckList);
