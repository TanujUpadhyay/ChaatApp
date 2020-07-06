import React from "react";
import { TouchableOpacity, StyleSheet, Image, View } from "react-native";

const ButtonWithBackground = ({ style = {}, onPress, image }) => {
  return (
    <View style={[styles.button, style]}>
      <TouchableOpacity onPress={onPress}>
        <Image source={image} style={styles.imageIconstyle} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonWithBackground;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  imageIconstyle: {
    padding: 10,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
});
