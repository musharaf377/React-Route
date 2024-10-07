// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDStqIz8cND8yWiTTesJ7HTwOTLcvggOzw",
  authDomain: "simple-firebase-aa192.firebaseapp.com",
  projectId: "simple-firebase-aa192",
  storageBucket: "simple-firebase-aa192.appspot.com",
  messagingSenderId: "823554893827",
  appId: "1:823554893827:web:4a5168803ce937fbe24636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;