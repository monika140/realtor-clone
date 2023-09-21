import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgCY50tKZGc_uIIheQBngJf-Jpqzv6ehc",
  authDomain: "realtor-clone-a2934.firebaseapp.com",
  projectId: "realtor-clone-a2934",
  storageBucket: "realtor-clone-a2934.appspot.com",
  messagingSenderId: "504132434542",
  appId: "1:504132434542:web:3fb250779976a13bac047f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
