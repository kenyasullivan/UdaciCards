import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { white, blue } from "../utils/colors";

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}> Click Me</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "blue",
    marginLeft: 5,
    marginRight: 5
  },
  buttonText: {
    alignSelf: "center",
    color: "blue",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default Button;
