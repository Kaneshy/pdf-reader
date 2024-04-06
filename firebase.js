// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb_cKox-4EZggSS_uJbayCTR38H9eo0XY",
  authDomain: "books-reader-c7c96.firebaseapp.com",
  projectId: "books-reader-c7c96",
  storageBucket: "books-reader-c7c96.appspot.com",
  messagingSenderId: "133644821500",
  appId: "1:133644821500:web:63d22a02339d31092e8879",
  measurementId: "G-E3CT325GWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app