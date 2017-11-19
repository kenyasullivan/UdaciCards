import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { blue, white } from "../utils/colors";

const Header = props => {
  return (
    <View style={styles.status}>
      <Text style={styles.text}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  status: {
    backgroundColor: blue,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  text: {
    fontSize: 20,
    color: white,
    fontWeight: "600"
  }
});
export default Header;
