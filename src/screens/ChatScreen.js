import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ChatScreen = () => {
  return (
    <View style={styles.constiner}>
      <Text style={styles.text}>Chat screen</Text>
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

export default ChatScreen;
