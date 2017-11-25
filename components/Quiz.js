import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Card from "../components/Card";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Quiz: " + navigation.state.params.deck
    };
  };

  state = {
    index: 0,
    answers: 0,
    completed: false
  };

  answerCorrect() {
    this.setState(state => {
      return {
        index: state["index"] + 1,
        answers: state["answers"] + 1
      };
    });
  }

  answerIncorrect() {
    this.setState(state => {
      return {
        ...state,
        index: state["index"] + 1
      };
    });
  }

  resetQuiz = () => {
    this.setState(() => ({ index: 0, results: [] }));
  };

  render() {
    const { deck } = this.props;
    const questions = this.props.deck.questions;
    const { index, answers } = this.state;

    if (!questions) {
      return (
        <View style={styles.container}>
          <Text>No questions available</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.scoreText}>
            Score:{answers / questions.length * 100}{" "}
          </Text>
        </View>
        <View>
          <Card card={this.props.deck.questions[index]} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={console.log("Correct")}
          >
            <Text style={styles.secondaryButtonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={console.log("InCorrect")}
          >
            <Text style={styles.primaryButtonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  scoreText: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: "600"
  },
  buttonContainer: {
    // flexDirection: "row"
    marginBottom: 40
  },
  primaryButton: {
    borderRadius: 5,
    height: 50,
    width: 150,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#0188D0",
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
  const { deck } = navigation.state.params;
  return {
    deck: decks[deck]
  };
}
export default connect(mapStateToProps)(Quiz);
