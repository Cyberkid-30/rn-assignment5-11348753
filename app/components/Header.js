import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require("../assets/profile.png")}
        />
        <View style={styles.profileName}>
          <Text style={{ color: "gray", fontSize: 20 }}>Welcome Back,</Text>
          <Text style={{ fontWeight: "bold", fontSize: 26 }}>Eric Atsu</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Image
          style={styles.searchIcon}
          source={require("../assets/search.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    marginBottom: 30,
  },
  profileInfo: {
    flexDirection: "row",
    gap: 15,
  },

  iconContainer: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 5,
    right: 10,
    padding: 20,
    borderRadius: 25,
    backgroundColor: "#F5F7F8",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: 40,
    height: 40,
  },
});
export default Header;
