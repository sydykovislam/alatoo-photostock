import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABBgjZud5GSayQ0voIf4A_SiJmvS5NXgU",
  authDomain: "alatoo-photostock.firebaseapp.com",
  projectId: "alatoo-photostock",
  storageBucket: "alatoo-photostock.appspot.com",
  messagingSenderId: "1053103277628",
  appId: "1:1053103277628:web:070afdbe890be015e16539"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };