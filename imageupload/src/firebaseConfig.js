import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyB7ldSqOVWNzBWuZSM4ewzEh9PqR0DN31A",
    authDomain: "sample-a2667.firebaseapp.com",
    projectId: "sample-a2667",
    storageBucket: "sample-a2667.appspot.com",
    messagingSenderId: "393197224370",
    appId: "1:393197224370:web:0d0bd7e996f9504a7f24ab"

});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;