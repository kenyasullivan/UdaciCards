import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Card from "../components/Card";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { blue, white } from "../utils/colors";

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

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

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
          index: this.state.index + 1,
          answers: this.state.answers + 1
        };
      });
    }
  }

  wrongAnswer() {
    const length = this.props.deck.questions.length;
    const { index } = this.state;
    if (index === length - 1) {
      this.setState(state => {
        return { complete: true, answers: this.state.answers };
      });
    } else {
      this.setState(state => {
        return { index: this.state.index + 1 };
      });
    }
  }

  resetQuiz() {
    this.setState(() => ({ index: 0, answers: 0, complete: false }));
  }

  scoreStatus(score) {
    if (score === 100) {
      return "Great!";
    }
    if (score >= 70) {
      return "Almost There!";
    }
    if (score >= 50) {
      return "Try Again";
    }
    return "Time to get started";
  }

  render() {
    const { deck } = this.props;
    const { index, answers, complete } = this.state;
    const questions = this.props.deck.questions;
    const score = Math.floor(answers / questions.length * 100);
    console.log(this.props);
    if (complete) {
      return (
        <View style={styles.container}>
          <View>
            <Text style={styles.scoreText}>Score:{score}%</Text>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.scoreStatus}>{this.scoreStatus(score)}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => this.resetQuiz()}
            >
              <Text style={styles.secondaryButtonText}>Reset Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={styles.primaryButtonText}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

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
          <Text style={styles.questionMeta}>
            Question {this.state.index + 1} of {questions.length}
          </Text>
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
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  scoreText: {
    marginTop: 10,
    fontSize: 30,
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
  },
  resetButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10
  },
  resetButtonText: {
    alignSelf: "center",
    color: "#0188D0",
    fontSize: 16,
    fontWeight: "600"
  },
  questionMeta: {
    fontSize: 12,
    alignSelf: "center",
    marginTop: 60
  },
  scoreStatus: {
    color: "#39BC57",
    fontWeight: "500",
    fontSize: 20,
    paddingBottom: 20,
    marginTop: 10,
    alignSelf: "center"
  }
});
function mapStateToProps(decks, { navigation }) {
  const { deck } = navigation.state.params;
  return {
    deck: decks[deck]
  };
}
export default connect(mapStateToProps)(Quiz);
