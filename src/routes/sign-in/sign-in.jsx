
import {  PopUpSignIn , createUserDocumentFromAuth } from "../../utils/firebase.utils";
import SignUpForm from "../../components/Sign-up-form/SignUpForm";


const SignIn =() =>{


    const PopUplogUser = async() =>{
        const {user} = await PopUpSignIn();
        createUserDocumentFromAuth(user);
    }
  
    return(<div>This is Sign page
    <button onClick={PopUplogUser}>Google Pop up</button>
    <SignUpForm/>
    </div>)
}

export default SignIn;