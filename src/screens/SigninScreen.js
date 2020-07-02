import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/Button";
import Strings from "../const/String";
import EmailTextField from "../components/TextField";

const SigninScreen = () => {
  return (
    <View style={styles.constiner}>
      <Text style={styles.text}>signIn screen</Text>
      <CustomButton title={Strings.Join} />
      <EmailTextField placeHolder={Strings.EmailPlaceHolder} />
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

export default SigninScreen;
