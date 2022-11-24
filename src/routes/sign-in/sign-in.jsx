import { PopUpSignIn } from "../../utils/firebase.utils";



const SignIn =() =>{
    const logUser = async() =>{
        const responce = await PopUpSignIn();
        console.log(responce);
    }
    return(<div>This is Sign page
    <button onClick={logUser}>Google</button></div>)
}

export default SignIn;