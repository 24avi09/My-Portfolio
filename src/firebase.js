import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBGT2l7XB_wzIMjorSHE_H1Wz1LjM-mYOM",
    authDomain: "abhishekh-portfolio.firebaseapp.com",
    projectId: "abhishekh-portfolio",
    storageBucket: "abhishekh-portfolio.appspot.com",
    messagingSenderId: "829649836254",
    appId: "1:829649836254:web:7952fbaafcdf403ff40a4f"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore()