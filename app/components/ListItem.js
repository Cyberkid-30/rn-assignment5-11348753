import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

function ListItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image style={styles.searchIcon} source={item.image} />
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ color: "gray", fontSize: 14 }}>{item.category}</Text>
      </View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          position: "absolute",
          right: 10,
        }}
      >
        {item.price}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F5F7F8",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
});

export default ListItem;
