import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAFqxIm0Z_B-sXlaAqxnVIEVYPsfu4f2kU",
  authDomain: "crwn-db-74906.firebaseapp.com",
  projectId: "crwn-db-74906",
  storageBucket: "crwn-db-74906.appspot.com",
  messagingSenderId: "188404320181",
  appId: "1:188404320181:web:c77129f066d4f7ff527bfc",
  measurementId: "G-7JE16KZGBZ",
};

firebase.default.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
