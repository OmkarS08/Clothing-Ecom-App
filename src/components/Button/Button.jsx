// default button
// sign button
// inverted button

import './Button.styles.scss';
const Button_Types_Classes ={
    google:'google-sign-in',
    inverted:'inverted'
}

const Button =({children,buttonType,...otherProps}) =>{
    return(<div>
        <button
         className={`button-container ${Button_Types_Classes[buttonType]}`}
        {...otherProps}>
        {children}
        </button>
    </div>)
}

export default Button;