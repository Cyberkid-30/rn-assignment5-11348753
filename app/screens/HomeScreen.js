import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Transactions from "../components/Transactions";

function HomeScreen(props) {
  return (
    <View>
      <Header />
      <Image
        style={{ marginBottom: 20 }}
        source={require("../assets/Card.png")}
      />
      <Buttons />
      <Transactions />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
