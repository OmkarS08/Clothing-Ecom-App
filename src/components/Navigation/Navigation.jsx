import { Fragment } from 'react'; //React fragments serve as a cleaner alternative to using unnecessary divs in our code. These fragments do not produce any extra elements in the DOM
import {Outlet ,Link} from 'react-router-dom'
import { ReactComponent as Crownlogo } from '../../assets/crown.svg';
import "./Navigation.styles.scss";
const Navigation =() =>{
    return(
      <Fragment>
      <div className='navigation'>
        <Link className='nav-logo-container' to='/'>
            <Crownlogo/>
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>Shop</Link>
        </div>      
      </div>
      <Outlet/>
      </Fragment>)
  }

  export default Navigation;