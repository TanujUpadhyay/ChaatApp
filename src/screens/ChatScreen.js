import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import firebase, { firestore } from "../firebase/Firebase";
import MessageView from "../components/MessageView";
import Color from "../util/Colors";
import Constants from "../const/Constants";
import Strings from "../const/String";
import DismissKeyboard from "../components/DismissKeyboard";
import Message from "../components/Message";
import { set } from "react-native-reanimated";

const ChatScreen = ({ route, navigation }) => {
  const { item } = route.params;

  const [messageList, setMessageList] = useState([]);
  const [message, setMesaage] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const userID = firebase.auth().currentUser.uid;

  useEffect(() => {
    navigation.setOptions({
      title: item.groupName,
    });
    getUserJoinAlreadyorNot();
    getMessage();
  }, []);

  const getUserJoinAlreadyorNot = () => {
    firestore
      .collection("members")
      .doc(item.groupID)
      .collection("member")
      .where("userID", "==", userID)
      .get()
      .then((querySnapshort) => {
        if (querySnapshort.size > 0) {
          querySnapshort.forEach((doc) => {
            if (doc.data() != null) {
              setIsJoined(true);
            } else {
              setIsJoined(false);
              showAlertatoJoin();
            }
          });
        } else {
          showAlertatoJoin();
        }
      })
      .catch((err) => {
        console.log(" Error geting documents : ", err);
      });
  };

  const showAlertatoJoin = () => {
    Alert.alert(
      Strings.joinchat,
      Strings.joinchatconfirm,
      [
        {
          text: "Yes",
          onPress: () => {
            joinGroup();
          },
        },
        {
          text: "No",
          onPress: () => {
            setTimeout(navigation.goBack, 0);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const joinGroup = () => {
    const groupMemberRef = firestore
      .collection("members")
      .doc(item.groupID)
      .collection("member")
      .doc();
    groupMemberRef
      .set({
        userID: userID,
      })
      .then((doRef) => {
        setIsJoined(true);
        Alert.alert(Strings.joinMessage + `${item.groupName} group`);
        setMesaage("");
      })
      .catch((err) => {
        setIsJoined(false);
        Alert.alert(Strings.joinGroupError);
      });
  };

  const getMessage = () => {
    const db = firestore;
    var messages = [];
    db.collection("message")
      .doc(item.groupID)
      .collection("messages")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added") {
            //console.log("New Message : ", change.doc.data());
            messages.push(change.doc.data());
          }
          if (change.type == "modified") {
            //console.log("Modified message ", change.doc.data());
          }
          if (change.type == "removed") {
            //console.log("removed message ", change.doc.data());
          }
          setMessageList(messages);
        });
      });
  };

  const sendMessagetoChat = () => {
    const messageRef = firestore
      .collection("message")
      .doc(item.groupID)
      .collection("messages")
      .doc();
    const userEmail = firebase.auth().currentUser.email;

    messageRef
      .set({
        messageID: messageRef.id,
        message: message,
        senderId: userID,
        senderEmail: userEmail,
      })
      .then((doRef) => {
        //console.log("Document writter with id : ", messageRef.id);
        setMesaage("");
      })
      .catch((er) => {
        Alert.alert(er.message);
        console.log("Error ", er);
      });
  };

  // const deleteChat = (groupID) => {
  //   const db = firestore;
  //   db.collection("message")
  //     .doc(groupID)
  //     .collection("messages")
  //     .doc()
  //     .delete()
  //     .then(function () {

  //     })
  //     .catch(function (error) {
  //       console.error("Error removing document: ", error);
  //     });
  // };

  return (
    <DismissKeyboard>
      <View style={styles.constiner}>
        <FlatList
          style={styles.flatlistStyle}
          data={messageList}
          keyExtractor={(item, index) => {
            return "key" + index.toString();
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={item.messageID}
                onPress={() => {
                  // deleteChat(item.messageID);
                }}
              >
                <Message item={item} key={index.toString()} />
              </TouchableOpacity>
            );
          }}
        />
        <View style={styles.messageFieldView}>
          <MessageView
            term={message}
            placeHolder={Strings.typeyourmessage}
            onTermChange={(message) => setMesaage(message)}
            onSubmit={sendMessagetoChat}
          ></MessageView>
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  constiner: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.theme,
  },
  flatlistStyle: {
    marginBottom: 10,
    flex: 0.9,
  },
  messageFieldView: {
    flex: 0.1,
  },
});

export default ChatScreen;
