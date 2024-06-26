import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../Config/colors";


function Button({ name, image }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconContainer}>
        <Image style={styles.searchIcon} source={image} />
      </View>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F5F7F8",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 70,
  },
});

export default Button;
