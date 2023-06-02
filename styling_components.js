import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import colors from "./colors";
import Constants from "expo-constants";

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
  flex: 1,
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

export function SectionComponent({ text, children }) {
  return (
    <View style={sectionContainer}>
      <Text style={genericText}>{text}</Text>
      <View style={innerContainer}>{children}</View>
    </View>
  );
}

export function MySafeAreaView({ children }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        screen: {
          paddingTop: Constants.statusBarHeight,
        },
      }}
    >
      {children}
    </SafeAreaView>
  );
}

export function ListItemSeparator() {
  return (
    <View
      style={{
        width: "100%",
        height: 1,
        backgroundColor: colors.mediumGray,
      }}
    />
  );
}
