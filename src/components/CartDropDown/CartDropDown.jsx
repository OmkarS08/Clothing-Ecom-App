import './CartDropDown.scss'
import Button from '../Button/Button'
import { CartItem } from '../CartItem/CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Card.context'

export const CartDropDown =()=>{
    const {cartItems} =useContext(CartContext)
    return(<div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems?.map((item) => <CartItem key={item.id} CartItem={item}/>)}
        </div>
        <Button>Go To Checkout</Button>
        </div>)
}