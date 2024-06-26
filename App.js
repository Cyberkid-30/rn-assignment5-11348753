import { StatusBar } from "expo-status-bar";
import { Settings, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import Button from "./app/components/Button";
import Buttons from "./app/components/Buttons";
import SettingsScreen from "./app/screens/SettingsScreen";
import colors from "./app/Config/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Tab = createBottomTabNavigator();
  const TabNavigator = () => {
    <Tab.Navigator>
      <Tab.Screen name="/" component={HomeScreen} />
      <Tab.Screen name="/settings" component={SettingsScreen} />
    </Tab.Navigator>;
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});
