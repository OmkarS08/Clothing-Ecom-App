
import { useState ,useContext} from "react";
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth } from "../../utils/firebase.utils";
import './SignUpForm.styles.scss'
import FormInput from "../Form-input/FormInput";
import Button from "../Button/Button";
import { UserContext } from "../../contexts/user.context";
//setting object for generalising
const defaultFormFields ={
    displayName:'', 
    email:'',
    password:'',
    confirmPassword:''
};

    const SignUpForm =() =>{
    const [formFields, setFormfields] =useState(defaultFormFields);
    const {displayName ,email,password,confirmPassword}=formFields;// destructuring
    console.log("hit");
    
    const {setCurrentUser} =useContext(UserContext); //setting up Usercontext 
    
    const resetFormFields =() =>{ //reset the form-fields after sign-up
        setFormfields(defaultFormFields);
    }

     const handleSubmit = async(event)=>{
        event.preventDefault(); // not to re-render

        if(password !== confirmPassword )
        {
            alert('password do not match!');
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use')
            {
                alert('Cannot create user, email already in use');
            }
            console.log('User creation at email and password',error);
        }
    }   
    //generaling Handlechange for all FormInputs
    function handleChange(event){
        const{name,value} =event.target;
        setFormfields({...formFields,[name]:value}); // seting value to particular fields
    }

    return(<div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign Up with your email and password</span>
        <form  onSubmit={handleSubmit}>
            <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>
            <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>
            <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
            <FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
            <Button  type="submit"> Submit</Button>
        </form>
    </div>)
}
export default SignUpForm;