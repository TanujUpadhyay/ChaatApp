import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import Color from "../util/Colors";
import Constants from "../const/Constants";
import Strings from "../const/String";

const MessageView = ({
  term,
  onTermChange,
  onValidateTextField,
  error,
  onSubmit,
  isJoined,
}) => {
  return (
    <View style={styles.constinerView}>
      <View style={styles.fieldView}>
        <TextInput
          autoCorrect={false}
          style={styles.textFiled}
          placeholder={Strings.typeamessage}
          onChangeText={onTermChange}
          value={term}
          onEndEditing={onValidateTextField}
          placeholderTextColor={Color.black}
        />
        <Button
          title={Strings.send}
          color={Color.logocolor}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constinerView: {
    flex: 1,
    backgroundColor: Color.theme,
    width: Constants.screenWidth,
  },
  fieldView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Color.textFeild,
  },
  textFiled: {
    fontSize: 14,
    flex: 1,
    marginRight: 10,
    paddingLeft: 10,
    width: "75%",
    borderColor: Color.logocolor,
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: Color.textFeild,
  },
  Button: {
    flex: 1,
    alignSelf: "center",
    width: "50%",
    height: "100%",
  },
});

export default MessageView;
