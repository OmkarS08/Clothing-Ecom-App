// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,signInWithPopup,signInWithRedirect ,GoogleAuthProvider} from 'firebase/auth'
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

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt:'select_account'
});

export const auth = getAuth();
export const PopUpSignIn = () => signInWithPopup(auth ,provider)

export const db = getFirestore();

export const createUserDocumentFromAuth =  async (userAuth) =>{
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
            createdAt
        });
        
    } catch (error) {
        console.log('Error!-created during adding users', error.message)
    }
}
return userDocRef;
 
 // retrun user Document
}