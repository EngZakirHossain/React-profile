// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB7ZKEmqz1BT3UrZCQD6baBetnsvqv4QGw",
    authDomain: "personal-10186.firebaseapp.com",
    projectId: "personal-10186",
    storageBucket: "personal-10186.appspot.com",
    messagingSenderId: "735068448527",
    appId: "1:735068448527:web:0840bd7890365b3797007a",
    measurementId: "G-LBQHP8TXFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
