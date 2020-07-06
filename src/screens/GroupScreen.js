import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
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
          image={Images.add}
        />
      ),
      headerLeft: () => (
        <ButtonWithBackground
          onPress={() => {
            //
          }}
          image={Images.logout}
        />
      ),
    });
  });

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
          "key" + index;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("chat Screen", {
                  item,
                });
              }}
            >
              <GroupItem item={item} />
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
