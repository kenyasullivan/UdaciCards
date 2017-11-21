import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { blue } from "../utils/colors";

const Deck = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card} />
      <View>
        <Text style={styles.cardMeta}>CardTitle (CardCount)</Text>
      </View>
    </View>
  );
};
/* Get width of window */
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 15,
    height: 200,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#ddd"
  },
  card: {
    backgroundColor: "#0188D0",
    height: 150
  },
  cardMeta: {
    fontWeight: "600",
    marginTop: 10
  }
});
export default Deck;
