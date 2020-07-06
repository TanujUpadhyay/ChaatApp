import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Images from "../const/Images";
import GroupItem from "../components/GroupItems";
import firebase, { firestore } from "../firebase/Firebase";
import Color from "../util/Colors";

const GroupScreen = ({ navigation }) => {
  const [group, setGroup] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonWithBackground
          onPress={() => {
            navigation.navigate("Add Group Screen");
          }}
          image={" +"}
        />
      ),
      headerLeft: () => (
        <ButtonWithBackground
          onPress={() => {
            signOutUser();
          }}
          image={" x "}
        />
      ),
    });
  });

  const signOutUser = async () => {
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("press");
        });
      // navigation.reset({
      //     index: 0,
      //     routes: [{name: 'SplashScreen'}]
      // })
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  const getChats = () => {
    const db = firestore;
    var groupArray = [];
    db.collection("group").onSnapshot((snapshort) => {
      snapshort.docChanges().forEach((change) => {
        if (change.type == "added") {
          // console.log("New Group : ", change.doc.data());
          groupArray.push(change.doc.data());
        }
        if (change.type == "modified") {
          console.log("Modified Group ", change.doc.data());
        }
        if (change.type == "removed") {
          console.log("removed Group ", change.doc.data());
        }

        setGroup(groupArray);
      });
    });
  };

  return (
    <View style={styles.constiner}>
      <FlatList
        data={group}
        keyExtractor={(item, index) => {
          return "key" + index.toString();
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={item.groupID}
              onPress={() => {
                navigation.navigate("chat Screen", {
                  item,
                });
              }}
            >
              <GroupItem item={item} key={index.toString()} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.theme,
  },
});

export default GroupScreen;
