// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ4CDOx4NAbtkrRuZHWIqG2C2YHUneaQ0",
    authDomain: "reactauth-bfa69.firebaseapp.com",
    projectId: "reactauth-bfa69",
    storageBucket: "reactauth-bfa69.appspot.com",
    messagingSenderId: "298535595292",
    appId: "1:298535595292:web:5336237fa17ff47f8bded9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
