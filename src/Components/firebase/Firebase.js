
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLdklReru0DGEbsyWPYSDJPmblW5wk48o",
  authDomain: "skyshop-654bf.firebaseapp.com",
  projectId: "skyshop-654bf",
  storageBucket: "skyshop-654bf.appspot.com",
  messagingSenderId: "14891250792",
  appId: "1:14891250792:web:bba7459cfd2fd9495177dd"
};


const app = initializeApp(firebaseConfig);
const Auth=getAuth()
const db = getFirestore(app);

export {app,Auth,db}