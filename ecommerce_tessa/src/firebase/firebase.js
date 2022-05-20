// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Ka6kkDW0St0PQ5aSZ1IP9979awtrr6U",
  authDomain: "ecommerce-tessa.firebaseapp.com",
  projectId: "ecommerce-tessa",
  storageBucket: "ecommerce-tessa.appspot.com",
  messagingSenderId: "626996936137",
  appId: "1:626996936137:web:cceecb1843bb54e3073c18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;