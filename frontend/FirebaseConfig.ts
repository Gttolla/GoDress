import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPKB2sa7z64JEuSvy_zejFzfHRbnlr7SI",
  authDomain: "godress-28aeb.firebaseapp.com",
  projectId: "godress-28aeb",
  storageBucket: "godress-28aeb.appspot.com",
  messagingSenderId: "483258326135",
  appId: "1:483258326135:web:9b3e194c45cbe3b6203a72",
  measurementId: "G-ZFE2RPPB77"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);