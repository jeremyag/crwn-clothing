import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDqI0fcRhXaop57NX-mIwsnYOcnvp65E40",
  authDomain: "crwn-db-41344.firebaseapp.com",
  projectId: "crwn-db-41344",
  storageBucket: "crwn-db-41344.appspot.com",
  messagingSenderId: "1065302961087",
  appId: "1:1065302961087:web:dcf042623a278976f08f0a",
  measurementId: "G-92QZR2QXMD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;