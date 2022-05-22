// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtSMSzy4dfEbsKjOVNRLgSIWqavlYxlQU",
  authDomain: "total-tools-47ca6.firebaseapp.com",
  projectId: "total-tools-47ca6",
  storageBucket: "total-tools-47ca6.appspot.com",
  messagingSenderId: "823939570965",
  appId: "1:823939570965:web:6e9569a4463a40e68b1d1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;