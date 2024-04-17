// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtHTzcVvDCkKS4j1D7VMvbUzro29eTuRM",
  authDomain: "netflix-121dc.firebaseapp.com",
  projectId: "netflix-121dc",
  storageBucket: "netflix-121dc.appspot.com",
  messagingSenderId: "722659954354",
  appId: "1:722659954354:web:3fbd88a855bcff15f843ab",
  measurementId: "G-QFTGQW4TQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();