import React from "react";
import { TouchableOpacity, StyleSheet, Image, View, Text } from "react-native";

const ButtonWithBackground = ({ style = {}, onPress, image }) => {
  return (
    <View style={[styles.button, style]}>
      <TouchableOpacity onPress={onPress}>
        {/* <Image source={image} style={styles.imageIconstyle} />
         */}
        <Text style={styles.addIcon}> {image} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonWithBackground;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    margin: 9,
  },
  addIcon: {
    fontSize: 22,
    color: "white",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 50,
    padding: 3,
    margin: 5,
  },
  imageIconstyle: {
    padding: 10,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
});
