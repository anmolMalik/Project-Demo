// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';




const firebaseConfig = {
  apiKey: "AIzaSyAXXqKsBvniZK9ssVLq3OQ6iXRjVSnqLis",
  authDomain: "gym-ui-7f99f.firebaseapp.com",
  projectId: "gym-ui-7f99f",
  // databaseURL: "https://gym-ui-7f99f-default-rtdb.firebaseio.com",
  storageBucket: "gym-ui-7f99f.appspot.com",
  messagingSenderId: "271839903353",
  appId: "1:271839903353:web:e2f1809e3662c7b0bd5ea8",
  measurementId: "G-W5BRKL9MBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const fireDb=firebase.initializeApp(firebaseConfig);
export const dataRef=firebase.database();

export {app,auth};
export default fireDb.database().ref();
// export default firebase
