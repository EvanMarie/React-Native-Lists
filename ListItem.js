import React from "react";
import AppText from "./AppText";
import { View, Image, StyleSheet } from "react-native";
import colors from "./colors";

function ListItem({ image, title, description, text }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />

      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.description}>{description}</AppText>
        <AppText style={styles.message}>{text}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  image: {
    // to make a round image out of a square one
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  title: {
    fontWeight: "500",
  },
  description: {
    color: colors.mediumGray,
  },
  message: {
    color: colors.darkGray,
    fontSize: 13,
  },
});

export default ListItem;
