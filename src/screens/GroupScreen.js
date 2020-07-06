import React, { useLayoutEffect, useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Images from "../const/Images";

const GroupScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonWithBackground
          onPress={() => {
            navigation.navigate("Add Group Screen");
          }}
          image={Images.add}
        />
      ),
      headerLeft: () => (
        <ButtonWithBackground
          onPress={() => {
            //
          }}
          image={Images.logout}
        />
      ),
    });
  });

  return (
    <View style={styles.constiner}>
      <Text style={styles.text}>Group screen 3 button</Text>
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

export default GroupScreen;
