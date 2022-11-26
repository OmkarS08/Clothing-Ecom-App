
import SignUpForm from "../../components/Sign-up-form/SignUpForm";
import SignInForm from "../../components/Sign-inForm/SignInForm";
import './Authentication.styles.scss'
const Authentication =() =>{  
    return(<div className="authentication-container">
    <SignInForm/>
    <SignUpForm/>
    </div>)
}

export default Authentication;