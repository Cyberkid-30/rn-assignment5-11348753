import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";

function Buttons(props) {
  const buttons = [
    { name: "Send", image: require("../assets/send.png") },
    { name: "Receive", image: require("../assets/recieve.png") },
    { name: "Loan", image: require("../assets/loan.png") },
    { name: "Topup", image: require("../assets/topUp.png") },
  ];

  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <Button name={button.name} image={button.image} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Buttons;
