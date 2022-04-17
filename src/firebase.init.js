// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqAOloGouid5QTxqs0W16ugZFe1pufooU",
  authDomain: "wild-earth-f3a62.firebaseapp.com",
  projectId: "wild-earth-f3a62",
  storageBucket: "wild-earth-f3a62.appspot.com",
  messagingSenderId: "786300047062",
  appId: "1:786300047062:web:3c05626f2f77b6745e0377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;