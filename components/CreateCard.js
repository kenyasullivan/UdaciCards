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
import { addCard } from "../actions";
import { addCardToDeck } from "../utils/api";
import { blue, white, lightgray } from "../utils/colors";

class CreateCard extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    return {
      title: "Add Card"
    };
  };

  state = {
    question: "",
    answer: ""
  };

  onSubmit = () => {
    const { question, answer } = this.state;
    const { deck } = this.props;
    console.log(deck);
    if (!question) {
      Alert.alert("Please enter a question");
      return;
    }
    if (!answer) {
      Alert.alert("Please enter a question.");
      return;
    }
    if (question && answer) {
      const card = {
        question: question,
        answer: answer
      };
      this.props.dispatch(addCard(deck.title, { question, answer }));
      addCardToDeck(deck.title, card);
      this.props.navigation.goBack();
    }
  };

  handleQuestionText = typedText => {
    this.setState({ question: typedText });
  };

  handleAnswerText = typedText => {
    this.setState({ answer: typedText });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add card to deck!</Text>
        <TextInput
          style={styles.input}
          maxLength={50}
          placeholder="Question"
          onChangeText={this.handleQuestionText}
        />
        <TextInput
          style={styles.input}
          maxLength={255}
          multiline={true}
          placeholder="Answer"
          onChangeText={this.handleAnswerText}
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

function mapStateToProps(decks, { navigation }) {
  const { deck } = navigation.state.params;
  return {
    deck: decks[deck]
  };
}

export default connect(mapStateToProps)(CreateCard);
