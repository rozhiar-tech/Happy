// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBhWhiAoLLBMbiKnPTVgIelfm_GpG5QN8c',
  authDomain: 'happy-47972.firebaseapp.com',
  projectId: 'happy-47972',
  storageBucket: 'happy-47972.appspot.com',
  messagingSenderId: '941243855146',
  appId: '1:941243855146:web:f6a772db5452b782b4ae53',
  measurementId: 'G-JK4YXR9SMR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
