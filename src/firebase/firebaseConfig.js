import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyAlx-ajj-j5mR9GK8IyvdSbtn5-GgWClb0",
  authDomain: "furniturestore-d6dc4.firebaseapp.com",
  databaseURL: "https://furniturestore-d6dc4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "furniturestore-d6dc4",
  storageBucket: "furniturestore-d6dc4.appspot.com",
  messagingSenderId: "499116114771",
  appId: "1:499116114771:web:c4c53fbdb3de5d86e157a6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}