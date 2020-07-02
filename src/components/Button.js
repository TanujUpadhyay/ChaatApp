import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import Color from "../util/Colors";
import { color } from "react-native-reanimated";

const CustomButton = (props) => {
  const {
    title = " Enter ",
    styleDeafault = {},
    textstyleDefalt = {},
    onPress,
    isLoading,
  } = props;

  const loader = () => {
    return (
      <ActivityIndicator style={styles.buttonStyle} animating={isLoading} />
    );
  };

  const button = () => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return <View style={[styleDeafault]}>{isLoading ? loader() : button()}</View>;
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
