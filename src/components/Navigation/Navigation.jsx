import { Fragment ,useContext} from 'react'; //React fragments serve as a cleaner alternative to using unnecessary divs in our code. These fragments do not produce any extra elements in the DOM
import {Outlet ,Link} from 'react-router-dom'
import { ReactComponent as Crownlogo } from '../../assets/crown.svg';
import { CartIcon } from '../CartIcon/CartIcon';
import { CartDropDown } from '../CartDropDown/CartDropDown';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/Card.context';
import { signOutUser } from '../../utils/firebase.utils';
import "./Navigation.styles.scss";

const Navigation =() =>{
  const{currentUser } =useContext(UserContext); // setting up currentUser  in Context // it re-renders  when current user changes
  const{isCartOpen} =useContext(CartContext);
  // mehtod for signOut 

  //console.log(currentUser);
    return(
      <Fragment>
      <div className='navigation'>
        <Link className='nav-logo-container' to='/'>
            <Crownlogo/>
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>Shop</Link>
            { currentUser ? ( <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>) : (<Link className='nav-link' to='/auth'>SIGN IN</Link>)}
            <CartIcon/>
        </div>
        {isCartOpen && <CartDropDown/>  }   
      </div>
      <Outlet/>
      </Fragment>)
  }

  export default Navigation;