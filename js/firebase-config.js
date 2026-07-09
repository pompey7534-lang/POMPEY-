// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firestore Database
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXvZ3pKpJReUhXPweOEFe09X6-ImhJwzs",
  authDomain: "pompey-977ea.firebaseapp.com",
  projectId: "pompey-977ea",
  storageBucket: "pompey-977ea.firebasestorage.app",
  messagingSenderId: "607741100294",
  appId: "1:607741100294:web:3a221386c2155979681e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

// Firestore
const db = getFirestore(app);

// Export
export { auth, db };
