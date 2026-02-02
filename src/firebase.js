import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI5ROJdU7w0VbdSNkyo2OZsdReQ4az-Ow",
    authDomain: "gateofguidance-669d2.firebaseapp.com",
    projectId: "gateofguidance-669d2",
    storageBucket: "gateofguidance-669d2.firebasestorage.app",
    messagingSenderId: "254089826786",
    appId: "1:254089826786:web:bf94a59fe2f69e163ca9bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);

