import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { blue, white } from "../utils/colors";

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
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    });

    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
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
      transform: [{ rotateY: this.frontInterpolate }],
      opacity: this.frontOpacity
    };

    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }],
      opacity: this.backOpacity
    };

    return (
      <View>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text style={styles.cardText}> {this.props.card.question} </Text>

            <MaterialCommunityIcons
              name="gesture-tap"
              size={30}
              color="#0188D0"
              style={{ position: "absolute", bottom: 0, right: 0 }}
            />
          </Animated.View>

          <Animated.View
            style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
          >
            <Text style={styles.cardTextBack}> {this.props.card.answer} </Text>
            <MaterialCommunityIcons
              name="gesture-tap"
              size={30}
              color="#fff"
              style={{ position: "absolute", bottom: 0, right: 0 }}
            />
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
    borderColor: "#ddd",
    marginBottom: 20,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    elevation: 1
  },
  flipCardBack: {
    backgroundColor: "#0188D0",
    position: "absolute"
  },
  tapIcon: {
    alignSelf: "flex-end"
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
