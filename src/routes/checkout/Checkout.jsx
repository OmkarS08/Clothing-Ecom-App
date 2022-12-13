import './Checkout.scss'
import { useContext } from 'react';
import { CartContext  } from '../../contexts/Card.context';
import { CheckoutItem } from '../../components/Checkout-item/Checkout-item';
export const Checkout =()=>{
    const {cartItems ,addItemToCart ,removeItemToCart} =useContext(CartContext);

    return(
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
            <span>Product</span>
            </div>
            <div className='header-block'>
            <span>Quantity</span>
            </div>
            <div className='header-block'>
            <span>Price</span>
            </div>
            <div className='header-block'>
            <span>Remove</span>
            </div>
        </div>
        {cartItems.map((items) => {
        return(<CheckoutItem key={items.id} cartItem={items}/>);})}
        <span className='total'> Total:0</span>

    </div>);
}