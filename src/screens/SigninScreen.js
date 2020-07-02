import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import CustomButton from "../components/Button";
import Strings from "../const/String";
import EmailTextField from "../components/TextField";
import PasswordTextField from "../components/PasswordTextFeild";
import Images from "../const/Images";
import Constants from "../const/Constants";
import DismissKeyboard from "../components/DismissKeyboard";
import Utility from "../util/Utility";
import Color from "../util/Colors";
import firebase from "../firebase/Firebase";
import { auth } from "firebase";

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const validateEmail = () => {
    const isValidEmail = Utility.isEmailVaild(email);
    isValidEmail
      ? setEmailError("")
      : setEmailError(Strings.InvalidEmailAddress);
    return isValidEmail;
  };

  const validatePassword = () => {
    const isValidPassword = Utility.isvALIDfIELD(password);
    isValidPassword
      ? setPasswordError("")
      : setPasswordError(Strings.PasswordFieldEmpty);
    return isValidPassword;
  };

  const perFromAuth = () => {
    const isValidEmail = validateEmail();
    const isValipassword = validatePassword();
    if (isValidEmail && isValipassword) {
      setEmailError("");
      setPasswordError("");
      registration(email, password);
    }
  };

  const registration = (email, password) => {
    try {
      setIsloading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          setIsloading(false);
          Alert.alert("Logged In");
        })
        .catch((err) => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
              setIsloading(false);
              Alert.alert("Create a New Coder");
            })
            .catch((err) => {
              setIsloading(false);
              console.log("error  :---  " + err);
              Alert.alert(err.message);
            });
        });
    } catch (err) {
      setIsloading(false);
      Alert.alert(err.message);
    }
  };

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView style={styles.constiner} behavior="padding" enabled>
        <View style={styles.constiner}>
          <SafeAreaView>
            <Image style={styles.logo} source={Images.logo} />

            <EmailTextField
              term={email}
              error={emailError}
              placeHolder={Strings.EmailPlaceHolder}
              onTermChnage={(newEmail) => setEmail(newEmail)}
              onValidateEmailAddress={validateEmail}
            />

            <PasswordTextField
              term={password}
              error={PasswordError}
              placeHolder={Strings.PasswordPlaceHolder}
              onTermChnage={(newPassword) => setPassword(newPassword)}
              onValidPasswordField={validatePassword}
            />

            <CustomButton
              title={Strings.Join}
              isLoading={isLoading}
              onPress={perFromAuth}
            />
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
    margin: 0.01 * Constants.screenHeight,
    width: 300,
    height: 200,
    borderRadius: 50,
  },
  constiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.theme,
  },
});

export default SigninScreen;
