import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp ({
  apiKey: "AIzaSyAvp9WqnbavSGjqCcfAsqNpXowY_iBgcBU",
  authDomain: "websoftik-tms-project.firebaseapp.com",
  projectId: "websoftik-tms-project",
  storageBucket: "websoftik-tms-project.appspot.com",
  messagingSenderId: "626256802821",
  appId: "1:626256802821:web:1dce70b853679e729ad86c",
  measurementId: "G-Q27PPE10JQ"
});

export const auth = app.auth()
export default app