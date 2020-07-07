import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");

import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "react-native-dotenv";

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: "G-25YTFLK2ET",
};
Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
