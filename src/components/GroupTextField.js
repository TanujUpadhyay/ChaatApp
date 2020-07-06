import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import Colors from "../util/Colors";
import Constants from "../const/Constants";

const GroupTextField = ({
  term,
  placeHolder,
  onTermChange,
  onValidateTextField,
  error,
  placeholderColor,
}) => {
  return (
    <View>
      <Text style={styles.ErrorText}>{error}</Text>
      <View style={styles.textFiledView}>
        <TextInput
          autoCorrect={false}
          style={styles.TextFiled}
          placeholder={placeHolder}
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onValidateTextField}
          placeholderTextColor={placeholderColor}
        />
      </View>
    </View>
  );
};

export default GroupTextField;

const styles = StyleSheet.create({
  TextFiled: {
    fontSize: 15,
    flex: 1,
    marginHorizontal: 20,
  },
  textFiledView: {
    height: Constants.screenHeight * 0.06,
    width: Constants.screenWidth * 0.85,
    marginTop: 5,
    marginBottom: 10,
    borderColor: Colors.charcoal,
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: Colors.smoke,
    borderRadius: 20,
  },
  ErrorText: {
    fontSize: 12,
    color: "red",
    marginBottom: -5,
    marginHorizontal: 20,
  },
});
