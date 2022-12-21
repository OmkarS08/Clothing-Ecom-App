
import { useState } from "react";
import { PopUpSignIn ,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import './SignInForm.styles.scss'
import FormInput from "../Form-input/FormInput";
import Button ,{Button_Types_Classes}from "../Button/Button";
import { errorPrefix } from "@firebase/util";

//setting object for generalising
const defaultFormFields ={
    email:'',
    password:''
};

    const SignInForm =() =>{
    const [formFields, setFormfields] =useState(defaultFormFields);
    const {email,password}=formFields;// destructuring
    
   
    const resetFormFields =() =>{ //reset the form-fields after sign-up
        setFormfields(defaultFormFields);
    }

    const SignInWithGoogle = async() =>{
         await PopUpSignIn();
    }

     const handleSubmit = async(event)=>{
        event.preventDefault(); // not to re-fresh the screen on submit

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
        } 
        catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect Password for the mail');
                    break;
                case 'auth/user-not-found' :
                    alert('user not found');
                    break;
                default:
                    console.log(error);
            }
            }
            // if(error.code ==='auth/wrong-password')
            // {
            //     alert('incorrect Password for Email')
            // }
        }
       
    //generaling Handlechange for all FormInputs
    function handleChange(event){
        const{name,value} =event.target;
        setFormfields({...formFields,[name]:value}); // seting value to particular fields
    }

    return(<div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form  onSubmit={handleSubmit}>
            <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>
            <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
            <div className="buttons-container">
            <Button  type="submit"> Sign In</Button>
            <Button buttonType={Button_Types_Classes.google} type='button' onClick={SignInWithGoogle} > Google Sign In</Button>
            </div>
        </form>
    </div>)
}
export default SignInForm;