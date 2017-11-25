import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";

class Card extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }
  render() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };

    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };

    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => this.flipCard()}>
            <Text style={styles.flipText}>Flip Card</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text> Front </Text>
          </Animated.View>

          <Animated.View
            style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
          >
            <Text> Back </Text>
          </Animated.View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={console.log("Correct")}
          >
            <Text style={styles.secondaryButtonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={console.log("InCorrect")}
          >
            <Text style={styles.secondaryButtonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  flipCard: {
    width: width - 40,
    height: 200,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    backfaceVisibility: "hidden",
    borderColor: "#0188D0",
    marginBottom: 20
  },
  flipCardBack: {
    backgroundColor: "#0188D0",
    position: "absolute"
  },
  flipText: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#0188D0"
  },
  primaryButton: {
    borderRadius: 5,
    height: 50,
    width: 150,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#0188D0",
    // flexDirection: "row",
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
    // flexDirection: "row",
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
  buttonContainer: {
    flexDirection: "row"
  }
});

export default Card;
