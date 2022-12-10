import './CartIcon.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Card.context'

export const CartIcon =() =>{
    const {isCartOpen,setIsCartOpen} =useContext(CartContext);
    const toggleCartOpen =() =>setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggleCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
        <span>just for git</span>
        </div>
    )
}