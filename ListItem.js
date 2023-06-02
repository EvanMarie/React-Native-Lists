import React from "react";
import AppText from "./AppText";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import colors from "./colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  image,
  title,
  description,
  text,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.messageContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.description}>{description}</AppText>
            <AppText style={styles.message}>{text}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    paddingVertical: 10,
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
    color: colors.darkGray,
  },
  messageContainer: {
    flex: 1, // Allow container to take up remaining space
  },
  message: {
    color: colors.darkGray,
    fontSize: 15,
    flexWrap: "wrap", // Allow text to wrap to next line
  },
});

export default ListItem;
