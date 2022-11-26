import './FormInput.scss'

const FormInput=({label, ...otherProps})=>{ //use of spread operator to assign other props to input elemet

   return(<div className="group">
   <input className="form-input" {...otherProps}/>
   {
    label &&(<label className={
        `${otherProps.value.length ?'shrink' : ''} 
        form-input-label`}>
        {label}
        </label>)
   } 
   </div>) 
}

export default FormInput;