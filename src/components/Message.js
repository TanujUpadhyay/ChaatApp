import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Images from "../const/Images";
import GroupItem from "../components/GroupItems";
import firebase, { firestore } from "../firebase/Firebase";
import Color from "../util/Colors";
import Constants from "../const/Constants";
import Strings from "../const/String";

const Message = ({ item }) => {
  const userID = firebase.auth().currentUser.uid;

  const messageView = () => {
    if (userID === item.senderId) {
      return (
        <View style={styles.othersMessageContainerView}>
          <Text style={[styles.senderName, { textAlign: "right" }]}>
            {item.senderEmail}
          </Text>
          <Text style={[styles.message, { textAlign: "right" }]}>
            {item.message}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.myMessageContainerView}>
          <Text style={styles.senderName}> {item.senderEmail}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </View>
      );
    }
  };
  return messageView();
};

const styles = StyleSheet.create({
  othersMessageContainerView: {
    width: Constants.screenWidth - 50,
    backgroundColor: Color.otherMessage,
    borderRadius: 5,
    marginLeft: 25,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
  },
  myMessageContainerView: {
    width: Constants.screenWidth - 100,
    backgroundColor: Color.senderColor,
    borderRadius: 5,
    margin: 5,
    padding: 10,
  },
  senderName: {
    color: Color.charcoal,
    fontSize: 14,
    fontWeight: "600",
  },

  message: {
    color: Color.messageColor,
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 5,
  },
});

export default Message;
