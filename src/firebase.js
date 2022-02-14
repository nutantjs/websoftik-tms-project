import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvp9WqnbavSGjqCcfAsqNpXowY_iBgcBU",
  authDomain: "websoftik-tms-project.firebaseapp.com",
  projectId: "websoftik-tms-project",
  storageBucket: "websoftik-tms-project.appspot.com",
  messagingSenderId: "626256802821",
  appId: "1:626256802821:web:1dce70b853679e729ad86c",
  measurementId: "G-Q27PPE10JQ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
