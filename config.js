import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyByzfgrorfHcJbNNji7jvwdWcta1Xa60tM",
  authDomain: "books-70ecf.firebaseapp.com",
  projectId: "books-70ecf",
  storageBucket: "books-70ecf.appspot.com",
  messagingSenderId: "901608933597",
  appId: "1:901608933597:web:c11a06374080cd1581f334"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
