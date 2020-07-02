import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");

// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   DATABASE_URL,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   MESSAGING_SENDER_ID,
//   APP_ID,
// } from "react-native-dotenv";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   databaseURL: DATABASE_URL,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
//   measurementId: "G-25YTFLK2ET",
// };
// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCua_kY-7DMneT8YUea3AcfmHTe7xGZN44",
  authDomain: "chatapp-e1dcb.firebaseapp.com",
  databaseURL: "https://chatapp-e1dcb.firebaseio.com",
  projectId: "chatapp-e1dcb",
  storageBucket: "chatapp-e1dcb.appspot.com",
  messagingSenderId: "534491169389",
  appId: "1:534491169389:web:dac634a04b4854579cb564",
  measurementId: "G-25YTFLK2ET",
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
