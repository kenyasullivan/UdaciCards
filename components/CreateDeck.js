import React, { Component } from "react";
import {
  Alert,
  TextInput,
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { addDeck } from "../actions";
import { saveDeckTitle } from "../utils/api";
import { blue, white, lightgray } from "../utils/colors";

class CreateDeck extends Component {
  state = {
    title: "",
    questions: []
  };

  onSubmit = () => {
    const { title } = this.state;

    if (!title) {
      Alert.alert("Deck title is required.");
      return;
    }
    if (this.props.decks[title]) {
      Alert.alert("A deck with that name already exists.");
      return;
    }
    this.props.addDeck(title);
    saveDeckTitle(title);

    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: "Home" }),
        NavigationActions.navigate({
          routeName: "DeckDetails",
          params: { title }
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  };

  handleChangeText = typedText => {
    this.setState({ title: typedText });
  };

  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> What is the title for your new deck?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your deck title"
          onChangeText={this.handleChangeText}
          value={this.state.title}
        />
        <View style={styles.secondaryButton}>
          <TouchableOpacity onPress={this.onSubmit}>
            <Text style={styles.secondaryButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    padding: 20,
    marginTop: 20
  },
  input: {
    fontSize: 20,
    padding: 10,
    height: 45,
    borderColor: lightgray,
    borderWidth: 1,
    borderRadius: Platform.OS === "ios" ? 6 : 2,
    marginLeft: 20,
    marginRight: 20
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
    margin: 20
  },
  secondaryButtonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  }
});

function mapStateToProps(decks) {
  return { decks };
}
export default connect(mapStateToProps, { addDeck })(CreateDeck);
