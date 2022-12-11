import './CartDropDown.scss'
import { useContext } from 'react';

import { CartContext } from '../../contexts/Card.context';
import Button from '../Button/Button'
import { CartItem } from '../CartItem/CartItem';
import './CartDropDown.scss'

export const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

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
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

