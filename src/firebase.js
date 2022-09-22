import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";


firebase.initializeApp = {
  apiKey: "AIzaSyBI0clDlMHaC5t00b86Be-rZvTonWS-3GE",
  authDomain: "notes-10751.firebaseapp.com",
  projectId: "notes-10751",
  storageBucket: "notes-10751.appspot.com",
  messagingSenderId: "178499402356",
  appId: "1:178499402356:web:b99b4c6264a506f994af21",
  measurementId: "G-S40WP390K6"
};

// Initialize Firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firestore.functions();

export default firebase;