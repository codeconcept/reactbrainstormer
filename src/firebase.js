 import firebase from 'firebase/app';
 import 'firebase/firestore';

 const config = {
   apiKey: "AIzaSyAVQjmCt88DHAmYdEjyBRNg4gTjQ37MzSg",
   authDomain: "brainstormer-6480a.firebaseapp.com",
   databaseURL: "https://brainstormer-6480a.firebaseio.com",
   projectId: "brainstormer-6480a",
   storageBucket: "",
   messagingSenderId: "401624403482"
 };

 firebase.initializeApp(config);

 export const db = firebase.firestore();