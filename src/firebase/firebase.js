import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnnF-CrEeZvIq6GUUrX6dpKUgfTO_lnOo",
  authDomain: "insta-clone-28258.firebaseapp.com",
  projectId: "insta-clone-28258",
  storageBucket: "insta-clone-28258.appspot.com",
  messagingSenderId: "70723178871",
  appId: "1:70723178871:web:96c2cb96a97c628a67d172",
  measurementId: "G-MLPBK1HMSP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
