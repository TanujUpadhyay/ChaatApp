import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { YellowBox } from "react-native";

export default function App() {
  YellowBox.ignoreWarnings(["Setting a timer"]);
  return <MainStackNavigator />;
}
