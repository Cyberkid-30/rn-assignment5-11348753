import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Options({optionName}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{ fontSize: 26 }}>{optionName}</Text>
        <MaterialCommunityIcons name="arrow-right" color="gray" size={30} />
      </View>
      <View
        style={{
          marginTop: 15,
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Options;
