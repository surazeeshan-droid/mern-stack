// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-222df.firebaseapp.com",
  projectId: "mern-stack-222df",
  storageBucket: "mern-stack-222df.firebasestorage.app",
  messagingSenderId: "822058272352",
  appId: "1:822058272352:web:a9d16b6e1fc3b90fcfe505",
  measurementId: "G-2FV12YBLJK"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);