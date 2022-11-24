import { PopUpSignIn , createUserDocumentFromAuth} from "../../utils/firebase.utils";



const SignIn =() =>{
    const logUser = async() =>{
        const {user} = await PopUpSignIn();
        createUserDocumentFromAuth(user);
    }
    return(<div>This is Sign page
    <button onClick={logUser}>Google</button></div>)
}

export default SignIn;