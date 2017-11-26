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
    console.log("Cards:", this.props.card);
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };

    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };

    return (
      <View>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text style={styles.cardText}> {this.props.card.question} </Text>
          </Animated.View>

          <Animated.View
            style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
          >
            <Text style={styles.cardTextBack}> {this.props.card.answer} </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  flipCard: {
    width: width - 40,
    height: 200,
    borderWidth: 1,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    backfaceVisibility: "hidden",
    borderColor: "#0188D0",
    marginBottom: 40
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
  cardText: {
    fontWeight: "500",
    fontSize: 16
  },
  cardTextBack: {
    fontWeight: "500",
    fontSize: 16,
    color: "#fff"
  }
});

export default Card;
