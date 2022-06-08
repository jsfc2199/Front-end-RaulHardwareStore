import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCZE18uEPfIb2S4SY2f_uKCL_OlOfAgok0",
    authDomain: "raul-hardware-store.firebaseapp.com",
    projectId: "raul-hardware-store",
    storageBucket: "raul-hardware-store.appspot.com",
    messagingSenderId: "7924135521",
    appId: "1:7924135521:web:1f3c27044abbd353fbdc20"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()