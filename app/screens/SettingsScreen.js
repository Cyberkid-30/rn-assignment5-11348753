import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Switch } from "react-native";
import Options from "../components/Options";

function SettingsScreen() {
  const options = [
    "Language",
    "My Profile",
    "Contact Us",
    "Change Password",
    "Privacy Policy",
  ];

  const [isDarkMode, setDarkMode] = useState(true);
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 26,
          fontWeight: "600",
          marginBottom: 50,
        }}
      >
        Settings
      </Text>
      <View>
        {options.map((option) => (
          <Options optionName={option} />
        ))}
      </View>
      <View style={styles.colorSwitch}>
        <Text style={{ fontSize: 22 }}>Theme</Text>
        <Switch value={isDarkMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colorSwitch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default SettingsScreen;
