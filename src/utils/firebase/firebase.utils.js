import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLmofIAWpU59NpO-_Htm9MPbzW4TvGuAQ",
  authDomain: "crown-clothing-db-378c6.firebaseapp.com",
  projectId: "crown-clothing-db-378c6",
  storageBucket: "crown-clothing-db-378c6.appspot.com",
  messagingSenderId: "217301545832",
  appId: "1:217301545832:web:42c324746e3a42e7325cdd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFrmAuth = async (userAuth) => {
  const userRefDoc = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userRefDoc);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRefDoc, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userRefDoc;
};
