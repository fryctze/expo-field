// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat";
//import * as firebase from "firebase";
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

//const app = initializeApp(firebaseConfig);
let app;
let auth;
let analytics;

if (firebase.apps.length === 0) {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    analytics = getAnalytics(app);
} else {
    app = firebase.app();
    auth = firebase.auth();
    analytics = firebase.analytics()
}

export { auth, app, analytics };
