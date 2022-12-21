import { Fragment ,useContext} from 'react'; //React fragments serve as a cleaner alternative to using unnecessary divs in our code. These fragments do not produce any extra elements in the DOM
import {Outlet ,Link} from 'react-router-dom'
import { ReactComponent as Crownlogo } from '../../assets/crown.svg';
import { CartIcon } from '../CartIcon/CartIcon';
import { CartDropDown } from '../CartDropDown/CartDropDown';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/Card.context';
import { signOutUser } from '../../utils/firebase.utils';
import { NavigationContainer,NavLink,NavLinksContainer,LogoContainer } from './Navigation.styles';

const Navigation =() =>{
  const{currentUser } =useContext(UserContext); // setting up currentUser  in Context // it re-renders  when current user changes
  const{isCartOpen} =useContext(CartContext);
  // mehtod for signOut 

  //console.log(currentUser);
    return(
      <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
            <Crownlogo/>
        </LogoContainer>
        <NavLinksContainer>
            <NavLink  to='/shop'>Shop</NavLink>
            { currentUser ?
             ( <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) 
             : (<NavLink  to='/auth'>SIGN IN
             </NavLink>)}
            <CartIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropDown/>  }  
      </NavigationContainer>
      <Outlet/> 
      </Fragment>)
  }

  export default Navigation;