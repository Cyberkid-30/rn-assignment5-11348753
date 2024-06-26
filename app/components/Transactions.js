import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListItem from "./ListItem";

function Transactions() {
  const items = [
    {
      name: "Apple Store",
      image: require("../assets/apple.png"),
      category: "Entertainment",
      price: "-$5,99",
    },
    {
      name: "Spotify",
      image: require("../assets/spotify.png"),
      category: "Music",
      price: "-$12,99",
    },
    {
      name: "Money Transfer",
      image: require("../assets/moneyTransfer.png"),
      category: "Transaction",
      price: "$300",
    },
    {
      name: "Grocery",
      image: require("../assets/grocery.png"),
      category: "Shopping",
      price: "-$88",
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Transactions</Text>
        <Text style={{ color: "dodgerblue", fontSize: 20 }}>See All</Text>
      </View>
      <View style={styles.transactionList}>
        {items.map((item) => (
          <ListItem item={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Transactions;
