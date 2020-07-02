import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Color from "../util/Colors";

const CustomButton = (props) => {
  const {
    title = " Enter ",
    styleDeafault = {},
    textstyleDefalt = {},
    onPress,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonStyle, styleDeafault]}
    >
      <Text style={[styles.textStyle, textstyleDefalt]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    display: "flex",
    height: 50,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,

    borderColor: Color.charcoal,
    borderWidth: 1,
    backgroundColor: Color.logocolor,
    shadowColor: Color.logocolor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  textStyle: {
    fontSize: 16,
    textTransform: "uppercase",
    color: Color.white,
  },
});

export default CustomButton;
