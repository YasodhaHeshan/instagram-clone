import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAORuVLXV6nq7G-FwRiwKKjveMxU8BXgxQ",
  authDomain: "test-737fd.firebaseapp.com",
  projectId: "test-737fd",
  storageBucket: "test-737fd.appspot.com",
  messagingSenderId: "37239167445",
  appId: "1:37239167445:web:ca2bdc61896eded7f9855c",
  measurementId: "G-4CCKQW5XQ0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
