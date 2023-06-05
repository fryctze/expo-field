// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-25gJVefvn4Os-9M64pi-mtvngNbkZcw",
    authDomain: "testing-ground-brix.firebaseapp.com",
    projectId: "testing-ground-brix",
    storageBucket: "testing-ground-brix.appspot.com",
    messagingSenderId: "625918702872",
    appId: "1:625918702872:web:f74406afc696d688055a6d",
    measurementId: "G-YJGWEB9BC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);