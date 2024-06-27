// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8910b.firebaseapp.com",
  projectId: "mern-estate-8910b",
  storageBucket: "mern-estate-8910b.appspot.com",
  messagingSenderId: "997651749708",
  appId: "1:997651749708:web:b4772ec72e6af864114de9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);