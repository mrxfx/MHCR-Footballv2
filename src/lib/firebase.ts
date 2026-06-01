import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9oJ2azvuXaIM_5bxn4buDbAqIjR19CDU",
  authDomain: "mhcrftbl.firebaseapp.com",
  projectId: "mhcrftbl",
  storageBucket: "mhcrftbl.firebasestorage.app",
  messagingSenderId: "1036525734484",
  appId: "1:1036525734484:web:18ea1219ebb0fd40c3bbc1",
};

const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
