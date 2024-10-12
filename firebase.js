// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrwJ9ToZWTN8Mw4o_TJ_PiBQ1Wvb0f7x4",
  authDomain: "collegesearch-teaz.firebaseapp.com",
  projectId: "collegesearch-teaz",
  storageBucket: "collegesearch-teaz.appspot.com",
  messagingSenderId: "924195452298",
  appId: "1:924195452298:web:fce9161ae3c57ef321c473",
  measurementId: "G-6RMV61CX02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);