import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf-y95CQEVzDORKgqiavrucxn7_oX-Adc",
  authDomain: "auth-c7d87.firebaseapp.com",
  projectId: "auth-c7d87",
  storageBucket: "auth-c7d87.firebasestorage.app",
  messagingSenderId: "173098673080",
  appId: "1:173098673080:web:ce9620d52eb63f6b28254d",
  measurementId: "G-X05VPHFZJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;