import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListner } from "../utils/firebase.utils";
// context help us to store data which can be sent to particular node 
//without the help of props which makes it in efficient


// actual value you want to access
export const UserContext = createContext({
currentUser:null,
setCurrentUser:()=>null,
})


export const UserProvider =({children})=>{
    const[currentUser,setCurrentUser]=useState(null);
    const value={currentUser,setCurrentUser};
    useEffect( () =>{
        const unsubscribe = onAuthStateChangedListner((user)=>{console.log(user);});
        return unsubscribe;
    },[]) // only run this function when the component is mount
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}