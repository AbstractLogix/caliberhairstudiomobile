import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
// import { doc, getFirestore, setDoc } from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

import  keys  from "./firebase_secrets";

// Initialize Firebase
const firebaseConfig = {
  apiKey: keys.FIREBASE_API_KEY, //TODO
  authDomain: "caliberhairstudiomobile.firebaseapp.com",
  databaseURL: "https://caliberhairstudiomobile-default-rtdb.firebaseio.com/",
  projectId: "caliberhairstudiomobile",
  storageBucket: "project-id.appspot.com", // TODO
  messagingSenderId: "sender-id", // TODO
  appId: "app-id", // TODO
  measurementId: "G-measurement-id", // TODO
};

initializeApp(firebaseConfig);

