import './CartDropDown.scss'
import Button from '../Button/Button'
import { CartItem } from '../CartItem/CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Card.context'

export const CartDropDown =()=>{
    return(<div className='cart-dropdown-container'>
        <div className='cart-items' />
        <Button>Checkout</Button>
        </div>)
}