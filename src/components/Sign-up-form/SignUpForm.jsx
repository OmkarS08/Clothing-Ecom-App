
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";

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
    console.log(formFields);

     const handleSubmit = async(event)=>{
        event.preventDefault(); // not to re-render

        if(password !== confirmPassword )
        {
            alert('password do not match!');
            return;
        }
        try {
            const responce = await createAuthUserWithEmailAndPassword(email,password);
            console.log(responce);
        } catch (error) {
            console.log('User creation at email and password',error);
        }
    }   
    //generaling Handlechange for all inputs
    function handleChange(event){
        const{name,value} =event.target;
        setFormfields({...formFields,[name]:value}); // seting value to particular fields
    }

    return(<div>
        <h1>Sign Up with your email and password</h1>
        <form  onSubmit={handleSubmit}>
            <label>Display Name</label>
            <input type='text' required onChange={handleChange} name='displayName' value={displayName}/>
            <label> Email</label>
            <input type='email' required onChange={handleChange} name='email' value={email}/>
            <label>Password</label>
            <input type='password' required onChange={handleChange} name='password' value={password}/>
            <label> Confirm Password</label>
            <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
            <button type="submit" required> Submit</button>
        </form>
    </div>)
}
export default SignUpForm;