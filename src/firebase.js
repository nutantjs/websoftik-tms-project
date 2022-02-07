// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvp9WqnbavSGjqCcfAsqNpXowY_iBgcBU",
  authDomain: "websoftik-tms-project.firebaseapp.com",
  projectId: "websoftik-tms-project",
  storageBucket: "websoftik-tms-project.appspot.com",
  messagingSenderId: "626256802821",
  appId: "1:626256802821:web:1dce70b853679e729ad86c",
  measurementId: "G-Q27PPE10JQ"
};
export const auth = app.auth()
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);