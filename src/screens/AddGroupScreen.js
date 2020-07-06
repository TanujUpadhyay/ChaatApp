import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import GroupTextField from "../components/GroupTextField";
import Button from "../components/Button";
import Colors from "../util/Colors";
import Strings from "../const/String";
import Utility from "../util/Utility";
import firebase, { firestore } from "../firebase/Firebase";

const AddGroupScreen = ({ navigation }) => {
  const [groupName, setGroupName] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const validate = () => {
    const isValidField = Utility.isvALIDfIELD(groupName);
    isValidField ? setFieldError("") : setFieldError(Strings.GroupEmpty);
    return isValidField;
  };

  const createGroupToFirebase = () => {
    setIsloading(true);
    const groupRef = firestore.collection("group").doc();
    const userID = firebase.auth().currentUser.uid;

    groupRef
      .set({
        groupID: groupRef.id,
        groupName: groupName,
        userID: userID,
      })
      .then((doRef) => {
        console.log("Document written with ID : ", groupRef.id);
        setIsloading(false);
        addMemberofChatToFirebase(groupRef.id, userID);
      })
      .catch((error) => {
        Alert.alert(error.message);
        setIsloading(false);
        console.error("error adding document : ", error);
      });
  };

  const addMemberofChatToFirebase = (groupId, userId) => {
    const memberRef = firestore
      .collection("members")
      .doc(groupId)
      .collection("member")
      .doc();
    memberRef
      .set({
        userId: userId,
      })
      .catch((er) => {
        setIsloading(false);
        console.error("Errorr ading document : ", er);
      });
  };

  const performCreateGroup = () => {
    const isValidField = validate();
    if (isValidField) {
      createGroupToFirebase();
    }
  };

  return (
    <View style={styles.constiner}>
      <GroupTextField
        term={groupName}
        error={fieldError}
        placeHolder={Strings.EnterYourGroupName}
        onTermChange={(newGroupName) => setGroupName(newGroupName)}
        onValidateTextField={validate}
        placeholderColor={Colors.charcoal}
      />
      <Button
        title={Strings.CreateGroup}
        onPress={performCreateGroup}
        isLoading={isLoading}
      />
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

export default AddGroupScreen;
