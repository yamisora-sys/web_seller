// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDae4wkagbKao45AUzPbERyAod-e3EL-fs",
  authDomain: "web-seller-52ba6.firebaseapp.com",
  projectId: "web-seller-52ba6",
  storageBucket: "web-seller-52ba6.appspot.com",
  messagingSenderId: "585940974557",
  appId: "1:585940974557:web:f3068249f2993f75cf5434",
  measurementId: "G-RL5Y85SBJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);

export const auth = getAuth(app);
