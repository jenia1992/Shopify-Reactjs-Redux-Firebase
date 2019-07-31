import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
const config = {
    apiKey: "AIzaSyB5I4XVL294Ed-DnaXDgG7HGdgmnjMRumY",
    authDomain: "shopify-7fe9b.firebaseapp.com",
    databaseURL: "https://shopify-7fe9b.firebaseio.com",
    projectId: "shopify-7fe9b",
    storageBucket: "shopify-7fe9b.appspot.com",
    messagingSenderId: "428211019493",
    appId: "1:428211019493:web:3fe697e3becab79f"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  const storage = firebase.storage()
  // firebase.firestore().settings({ timestampsInSnapshots: true });
// const db = firebase.database.ref();
  export {
    storage,firebase as default
  } 