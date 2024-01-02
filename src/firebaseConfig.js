import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTD5ayfVeq0ZgVjBCHKFulHO_PfhZS_vY",
  authDomain: "unbooked-cf1a7.firebaseapp.com",
  projectId: "unbooked-cf1a7",
  storageBucket: "unbooked-cf1a7.appspot.com",
  messagingSenderId: "1039522583759",
  appId: "1:1039522583759:web:6060241279e48bacf5d3ba",
  measurementId: "G-N03JEDJTF4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
