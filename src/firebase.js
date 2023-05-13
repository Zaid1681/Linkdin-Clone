import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBinLzibZUFA4yU2-nGgTk8nVO0V4U2fCo",
  authDomain: "linkdln-clone-e1101.firebaseapp.com",
  projectId: "linkdln-clone-e1101",
  storageBucket: "linkdln-clone-e1101.appspot.com",
  messagingSenderId: "458076958994",
  appId: "1:458076958994:web:586768e2b631666501c3cb",
  measurementId: "G-XYBPMHWYMW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig); //Connecting all the things here
const db = firebaseApp.firestore();

const auth = firebase.auth; //connecting  to the backend

export { db, auth };
// export default firebase;
