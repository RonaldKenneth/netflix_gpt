// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfcRP8vgkuIbYnOzujarPQ7OlMCvOEYLQ",
  authDomain: "tmdb-gpt.firebaseapp.com",
  projectId: "tmdb-gpt",
  storageBucket: "tmdb-gpt.appspot.com",
  messagingSenderId: "769578242979",
  appId: "1:769578242979:web:111102f10ac13811d8c016",
  measurementId: "G-DK5EGNM0TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();