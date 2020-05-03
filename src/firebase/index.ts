import * as firebase from "firebase/app";
// import "firebase/firestore";
import "firebase/auth";
// import "firebase/firebase-storage";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: "https://project-id.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: "project-id.appspot.com",
  // messagingSenderId: "sender-id",
  appID: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(config);
export const authentication = firebase.auth;
