import { initializeApp } from 'firebase/app';
import { getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyByg9ojKFXpCy92Zdve82VLHyiU9FONOaQ",
  authDomain: "react-task-41542.firebaseapp.com",
  projectId: "react-task-41542",
  storageBucket: "react-task-41542.appspot.com",
  messagingSenderId: "238231215871",
  appId: "1:238231215871:web:d553ec537f5dc73acc36ca",
  measurementId: "G-X4SKFY3WWM"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithgooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  // console.log(userAuth);
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if(!userSnapshot.exists())
  {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    }
    catch(err) {
      console.log('error creating the user', err.message);
    }
  }

  return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth, email, password);
}


export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  
  return await signInWithEmailAndPassword(auth, email, password);
}

export const getDisplayName = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  const { displayName } = userSnapshot.data();
  return displayName;
};