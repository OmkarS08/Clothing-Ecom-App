import { useContext } from 'react';
import './Checkout-item.scss'
import { CartContext } from '../../contexts/Card.context';
export const CheckoutItem =({cartItem})=>{

    const {name,imageUrl,price,quantity}=cartItem;
    const {clearItemFromCart, addItemToCart ,removeItemToCart} =useContext(CartContext);

    const ClearItemHandler =()=> clearItemFromCart(cartItem);
    const addItemHandler =() =>addItemToCart(cartItem);
    const removeItemHandelr =() =>removeItemToCart(cartItem);
    return ( 
        <div className='checkout-item-container'>
            <div className='image-container'>
            <img src ={imageUrl} alt ={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandelr}>&#10094;</div>
                <div className='value'>{quantity}</div>
                <div className='arrow'onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={ClearItemHandler}>&#10005;</span>
        </div>
    )
}