import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import Colors from "../util/Colors";
import Constants from "../const/Constants";

const PasswordTextField = ({
  term,
  placeHolder,
  onTermChnage,
  onValidPasswordField,
  error,
}) => {
  return (
    <View>
      <Text style={styles.ErrorText}>{error}</Text>
      <View style={styles.TextFieldView}>
        <TextInput
          autoCorrect={false}
          style={styles.TextField}
          secureTextEntry
          placeholder={placeHolder}
          value={term}
          onChangeText={onTermChnage}
          onEndEditing={onValidPasswordField}
          placeholderTextColor={Colors.charcoal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextField: {
    fontSize: 15,
    flex: 1,
    marginHorizontal: 20,
    color: Colors.black,
  },
  TextFieldView: {
    height: Constants.screenHeight * 0.06,
    width: Constants.screenWidth * 0.85,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderColor: Colors.charcoal,
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: Colors.textFeild,
  },
  ErrorText: {
    fontSize: 12,
    color: "red",
    marginBottom: -5,
    marginHorizontal: 20,
  },
});

export default PasswordTextField;
