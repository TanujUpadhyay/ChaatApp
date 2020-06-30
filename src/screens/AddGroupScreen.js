import React from "react";
import { StyleSheet, View, Text } from "react-native";

const AddGroupScreen = () => {
  return (
    <View style={styles.constiner}>
      <Text style={styles.text}>AddGroup screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eeeeee",
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default AddGroupScreen;
