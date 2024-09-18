// plugins/firebase.js
import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore functions
import { getAnalytics } from 'firebase/analytics'; // Import Analytics functions if needed

const firebaseConfig = {
    apiKey: 'AIzaSyBD_pILvWIrotuQZwe20joZDoYMWCWP3yg',
    authDomain: 'fintoryemail.firebaseapp.com',
    projectId: 'fintoryemail',
    storageBucket: 'fintoryemail.appspot.com',
    messagingSenderId: '374688381548',
    appId: '1:374688381548:web:77d7821b0da7cada583649',
    measurementId: 'G-YCSNM86PFK'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Initialize Firestore

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('firestore', firestore);
});
