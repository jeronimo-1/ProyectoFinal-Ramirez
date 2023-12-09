import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDOi2R-uKA5TP7XxEUYe2U1eJvjgt-9UjY",
    authDomain: "ecommerce-coderhouse-jeronimo.firebaseapp.com",
    projectId: "ecommerce-coderhouse-jeronimo",
    storageBucket: "ecommerce-coderhouse-jeronimo.appspot.com",
    messagingSenderId: "372148394285",
    appId: "1:372148394285:web:4b7fe3bb7405027dd99ba4",
    measurementId: "G-QWPS674QHV"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };