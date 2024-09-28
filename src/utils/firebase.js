// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtOpzGwMOgoDtCuoK_yuwtb_r7L6zjc6M",
  authDomain: "netflixgpt-9ab05.firebaseapp.com",
  projectId: "netflixgpt-9ab05",
  storageBucket: "netflixgpt-9ab05.appspot.com",
  messagingSenderId: "638419260449",
  appId: "1:638419260449:web:2abdd990ef898cfab73f60",
  measurementId: "G-280ESD7BBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);