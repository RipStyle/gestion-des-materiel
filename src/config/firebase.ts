// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {Firestore, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyBt8KG4wCKcpVgfVBF8NzR3Y38FfIFubB0",
  authDomain: "gestion-des-materiel-info.firebaseapp.com",
  projectId: "gestion-des-materiel-info",
  storageBucket: "gestion-des-materiel-info.appspot.com",
  messagingSenderId: "979626658112",
  appId: "1:979626658112:web:191fa7c9ca8704c43e92a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider= new GoogleAuthProvider();
export const db=getFirestore(app)