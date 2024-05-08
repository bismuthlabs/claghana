import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCYWvq_hrbKlPIh0PFipUDRgq0VXU8xMwM",
  authDomain: "reecoplast-46ffa.firebaseapp.com",
  projectId: "reecoplast-46ffa",
  storageBucket: "reecoplast-46ffa.appspot.com",
  messagingSenderId: "309032738238",
  appId: "1:309032738238:web:35894f6a10818d67cf2def"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);