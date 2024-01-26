import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAstaWMmuLgw0eQtBiJV0kKqAM8G2azpus",
  authDomain: "clone-f2826.firebaseapp.com",
  projectId: "clone-f2826",
  storageBucket: "clone-f2826.appspot.com",
  messagingSenderId: "1030506454898",
  appId: "1:1030506454898:web:4cae3755a7462f875787eb",
  measurementId: "G-YV9SR7XF04"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };