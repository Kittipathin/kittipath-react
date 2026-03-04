import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd9gM0gXeDqPBspvbmJawMdMgX2dAxSzQ",
  authDomain: "my-project-7e883.firebaseapp.com",
  projectId: "my-project-7e883",
  storageBucket: "my-project-7e883.firebasestorage.app",
  messagingSenderId: "390324160957",
  appId: "1:390324160957:web:85a29c23c83aa1cf80aad4",
  measurementId: "G-7PPVV1KJ3E"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;