// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "quizzo-a9134.firebaseapp.com",
  projectId: "quizzo-a9134",
  storageBucket: "quizzo-a9134.appspot.com",
  messagingSenderId: "365363213179",
  appId: "1:365363213179:web:55aaa8c1652eb287ba03de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);