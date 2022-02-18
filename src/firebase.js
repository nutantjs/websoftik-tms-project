import { initializeApp } from  "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAvp9WqnbavSGjqCcfAsqNpXowY_iBgcBU",
  authDomain: "websoftik-tms-project.firebaseapp.com",
  projectId: "websoftik-tms-project",
  storageBucket: "websoftik-tms-project.appspot.com",
  messagingSenderId: "626256802821",
  appId: "1:626256802821:web:1dce70b853679e729ad86c",
  measurementId: "G-Q27PPE10JQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);

}
export function useAuth(){
  const [ currentUser, setCurrentUser ] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub
  },
   [])
  return currentUser;
}
export function logout(){
  return signOut(auth);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}




