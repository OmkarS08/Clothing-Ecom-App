// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,signInWithPopup,signInWithEmailAndPassword,GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth'
import {doc,setDoc,getDoc,getFirestore, Firestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7hUPAQLvabEMUZovuSYe6qV6Ld8ffnAg",
  authDomain: "clothing-db-53490.firebaseapp.com",
  projectId: "clothing-db-53490",
  storageBucket: "clothing-db-53490.appspot.com",
  messagingSenderId: "835752965093",
  appId: "1:835752965093:web:ca33f5aee18458bcc5350c"
};


// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt:'select_account'
});

export const auth = getAuth();
//pop-up Method
export const PopUpSignIn = () => signInWithPopup(auth ,googleProvider);

// // re-direct method
// export const RedirectSignIn =()=> signInWithRedirect(auth,googleProvider);

export const db = getFirestore();
// adding User to db
export const createUserDocumentFromAuth =  async (userAuth,additionalInformation={}) =>{
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const  userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

 // user data exists?
// creating user data
if(!userSnapshot.exists())
{
    const {email , displayName } =userAuth;
    const createdAt = new Date();
    try {
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInformation
        });
        
    } catch (error) {
        console.log('Error!-created during adding users', error.message)
    }
}
return userDocRef;
 
 // retrun user Document
}
// for Sign-up page method using create User mail and password
export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email ||!password) return;
    
    return await createUserWithEmailAndPassword(auth,email,password);

}
// for Sign in with email and password
export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email ||!password) return;
    
    return await signInWithEmailAndPassword(auth,email,password);

}