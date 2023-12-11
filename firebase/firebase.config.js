// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChgIsaMi0e30sCEFmhMCFWJJog5zppRY0",
  authDomain: "react-9-auth-23.firebaseapp.com",
  projectId: "react-9-auth-23",
  storageBucket: "react-9-auth-23.appspot.com",
  messagingSenderId: "186397142416",
  appId: "1:186397142416:web:d9db71e7e9d7f3b2449715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;