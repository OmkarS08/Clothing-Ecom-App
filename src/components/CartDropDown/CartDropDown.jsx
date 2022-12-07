import './CartDropDown.scss'
import Button from '../Button/Button'

export const CartDropDown =()=>{
    return(<div className='cart-dropdown-container'>
        <div className='cart-items' />
        <Button>Checkout</Button>
        </div>)
}