import './CartDropDown.scss'
import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/Card.context';
import Button from '../Button/Button'
import { CartItem } from '../CartItem/CartItem';
import './CartDropDown.scss'

export const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const CheckoutHandler =()=>{
    navigate('/Checkout')
  }
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={CheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

