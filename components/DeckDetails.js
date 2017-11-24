import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { white, blue, darkgray, lightgray, lightblue } from "../utils/colors";
import Deck from "./Deck";

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  };

  render() {
    const { deck } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTextMain}>{this.props.deck.title}</Text>
          <Text> {deck.questions.length} Cards</Text>
        </View>
        <View />
        <View style={styles.primaryButton}>
          <Text
            style={styles.primaryButtonText}
            onPress={() =>
              this.props.navigation.navigate("CreateCard", { deck: deck.title })
            }
          >
            {" "}
            Add A Card{" "}
          </Text>
        </View>
        <View style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}> Start Quiz</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  cardTitleContainer: {
    marginBottom: 50,
    alignItems: "center"
  },
  questionCount: {
    color: "darkgray"
  },
  cardTextMain: {
    fontSize: 30,
    fontWeight: "700"
  },
  cardCountText: {},
  primaryButton: {
    borderRadius: 5,
    height: 50,
    width: 150,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#0188D0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10
  },
  primaryButtonText: {
    alignSelf: "center",
    color: "#0188D0",
    fontSize: 16,
    fontWeight: "600"
  },
  secondaryButton: {
    borderRadius: 5,
    height: 50,
    width: 150,
    backgroundColor: "#0188D0",
    borderWidth: 1,
    borderColor: "#0188D0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10
  },
  secondaryButtonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  }
});

function mapStateToProps(decks, { navigation }) {
  const { title } = navigation.state.params;
  return {
    deck: decks[title]
  };
}

export default connect(mapStateToProps)(DeckDetails);
