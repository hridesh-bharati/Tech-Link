import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDddEixVBaJrptuFQXwvwPW4fBSDLpzdSs",
    authDomain: "hbtechlink-5e959.firebaseapp.com",
    projectId: "hbtechlink-5e959",
    storageBucket: "hbtechlink-5e959.firebasestorage.app",
    messagingSenderId: "654063757545",
    appId: "1:654063757545:web:4e02c655918d7089bbe878",
    measurementId: "G-PCH6M0DVYJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);