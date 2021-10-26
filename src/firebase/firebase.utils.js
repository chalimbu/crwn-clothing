import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDtbXuZ_5qMsvv9jZpWuJQS7x2hDtbgeFA",
  authDomain: "ztmreacclothing.firebaseapp.com",
  projectId: "ztmreacclothing",
  storageBucket: "ztmreacclothing.appspot.com",
  messagingSenderId: "875445187191",
  appId: "1:875445187191:web:e7248dc7525e1cc2c20c72",
  measurementId: "G-RQDJJCVM8Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;