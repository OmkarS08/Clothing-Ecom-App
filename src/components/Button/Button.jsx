// default button
// sign button
// inverted button

import { BaseButton ,
    GoogleSignInButton,
    InvertedButton } from "./Button.styles";
export const Button_Types_Classes ={
    base: 'base',
    google:'google-sign-in',
    inverted:'inverted'
};
const getButton = (buttonType = Button_Types_Classes.base) =>
({
        [Button_Types_Classes.base]:BaseButton,
        [Button_Types_Classes.google]:GoogleSignInButton,
        [Button_Types_Classes.inverted]:InvertedButton,

    }[buttonType]); 

const Button =({children,buttonType,...otherProps}) =>{

    const CustomButton =getButton(buttonType)
    return(<div>
        <CustomButton {...otherProps}>{children}</CustomButton>
    </div>)
}

export default Button;