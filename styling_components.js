import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import colors from "./colors";

export const appContainer = StyleSheet.create({
  flex: 1,
  padding: 20,
});

export const genericText = StyleSheet.create({
  color: "black",
  fontSize: 20,
  fontWeight: "bold",
});

export const sectionContainer = StyleSheet.create({
  marginBottom: 10,
  width: "100%",
  backgroundColor: colors.primary,
  padding: 10,
  borderRadius: 5,
});

export const innerContainer = StyleSheet.create({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
  marginBottom: 10,
});

export const messagesContainer = StyleSheet.create({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
  marginBottom: 10,
  backgroundColor: colors.lightGray,
  borderRadius: 5,
});

export function SectionComponent({ text, children }) {
  return (
    <View style={sectionContainer}>
      <Text style={genericText}>{text}</Text>
      <View style={innerContainer}>{children}</View>
    </View>
  );
}
