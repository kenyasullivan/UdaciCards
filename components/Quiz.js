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
    complete: false
  };

  correctAnswer() {
    const length = this.props.deck.questions.length;
    const { index } = this.state;
    if (index === length - 1) {
      this.setState(state => {
        return { complete: true, answers: this.state.answers + 1 };
      });
    } else {
      this.setState(state => {
        return {
          index: state["index"] + 1,
          answers: state["answers"] + 1
        };
      });
    }
  }

  wrongAnswer() {
    const length = this.props.deck.questions.length;
    const { index } = this.state;
    if (index === length - 1) {
      this.setState(state => {
        return { complete: true, answers: this.state.answers + 0 };
      });
    }
  }

  resetQuiz = () => {
    this.setState(() => ({ index: 0, answers: 0, complete: false }));
  };

  render() {
    const { deck } = this.props;
    const { index, answers, complete } = this.state;
    const questions = this.props.deck.questions;
    const score = Math.floor(answers / questions.length * 100);

    if (!questions) {
      return (
        <View style={styles.container}>
          <Text>No questions available</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start"
          }}
        >
          <Text style={styles.scoreText}>Score:{score}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <Text style={styles.scoreText}>
              Question {this.state.index + 1} of {questions.length}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.resetQuiz()}>
            <Text>Reset Quiz</Text>
          </TouchableOpacity>
          {questions && index <= questions.length ? (
            <Card card={questions[index]} />
          ) : (
            " "
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => this.correctAnswer()}
          >
            <Text style={styles.secondaryButtonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => this.wrongAnswer()}
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
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  scoreText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonContainer: {
    // flexDirection: "row",
    marginBottom: 100
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
