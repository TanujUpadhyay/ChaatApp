import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Images from "../const/Images";
import Constants from "../const/Constants";
import Color from "../util/Colors";

const GroupItem = ({ item }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={Images.groups} style={styles.ImageStyle} />
        <View
          style={{
            justifyContent: "center",
            borderRadius: 50,
            borderWidth: 1,
            backgroundColor: Color.gray,
            width: "70%",
            marginLeft: 30,
          }}
        >
          <Text style={styles.groupItem}> {item.groupName} </Text>
          <Text style={styles.groupMembers}> {item.groupMembers} </Text>
        </View>
      </View>
    </View>
  );
};

export default GroupItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    width: Constants.screenWidth,
    margin: 10,
  },
  descriptionContainer: {
    margin: 5,
  },
  ImageStyle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: Color.charcoal,
    borderWidth: 1,
    shadowColor: Color.logocolor,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 2,
    backgroundColor: Color.theme,
  },
  groupItem: {
    color: Color.white,
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 17,
  },
  groupMembers: {
    color: Color.white,
    fontSize: 14,
  },
  seprator: {
    height: 0.5,
    width: Constants.width,
    backgroundColor: Color.theme,
  },
});
