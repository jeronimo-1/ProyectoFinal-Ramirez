import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDOi2R-uKA5TP7XxEUYe2U1eJvjgt-9UjY",
  authDomain: "ecommerce-coderhouse-jeronimo.firebaseapp.com",
  projectId: "ecommerce-coderhouse-jeronimo",
  storageBucket: "ecommerce-coderhouse-jeronimo.appspot.com",
  messagingSenderId: "372148394285",
  appId: "1:372148394285:web:4b7fe3bb7405027dd99ba4",
  measurementId: "G-QWPS674QHV"
};

export const appFirestore = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
