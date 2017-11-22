import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { white, blue } from "../utils/colors";

export default function TextButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
      <Text style={[styles.textStyle, style]}> {children} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    borderRadius: 8,
    borderWidth: 1,
    height: 50
  },
  primaryText: {
    textAlign: "center",
    color: white
  },
  primaryButton: {
    backgroundColor: blue,
    borderWidth: 1,
    borderRadius: 8
  },
  secondaryText: {
    textAlign: "center",
    color: blue
  },
  secondaryButton: {
    backgroundColor: white,

    borderColor: blue
  }
});
