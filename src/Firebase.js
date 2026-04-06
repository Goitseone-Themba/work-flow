// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCAinfgeOIJJvK9BVqojj2-vjbdl05RzDk",
  authDomain: "work-flow-5a986.firebaseapp.com",
  projectId: "work-flow-5a986",
  storageBucket: "work-flow-5a986.appspot.com",
  messagingSenderId: "621745565585",
  appId: "1:621745565585:web:1d5574fe9f331cb7f6b430"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
