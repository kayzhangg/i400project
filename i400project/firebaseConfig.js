// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = {
  apiKey: "AIzaSyA7flifLWFa-dxSNR1qFINrV-04v90SO10",
  authDomain: "todolist-6cce8.firebaseapp.com",
  projectId: "todolist-6cce8",
  storageBucket: "todolist-6cce8.appspot.com",
  messagingSenderId: "145040116673",
  appId: "1:145040116673:web:a35301036a573b35e8fd40"
};

// Initialize Firebase
const app = initializeApp(firebase);
export default firebase;