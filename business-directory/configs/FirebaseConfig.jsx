// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdMJ1i8IgadyH2mlFmJVWr8dIz5ZpABA8",
  authDomain: "businessdirectoryapp-b0325.firebaseapp.com",
  projectId: "businessdirectoryapp-b0325",
  storageBucket: "businessdirectoryapp-b0325.appspot.com",
  messagingSenderId: "783072017111",
  appId: "1:783072017111:web:8d3c5cec28a9d16afb4e92",
  measurementId: "G-NJEPRNHJNJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);  // This line is correct
