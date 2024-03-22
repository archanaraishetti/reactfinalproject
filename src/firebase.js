// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPSM5GvdQLeAgGlsvLDyxRvmVB9y1bZao",
  authDomain: "final-e19d4.firebaseapp.com",
  projectId: "final-e19d4",
  storageBucket: "final-e19d4.appspot.com",
  messagingSenderId: "902329025896",
  appId: "1:902329025896:web:ca0ae7cd6b2b2e945182dd",
  measurementId: "G-WFWMMV1WLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
const analytics = getAnalytics(app);