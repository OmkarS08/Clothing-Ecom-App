import './Cartitem.scss'

export const CartItem =({cartItem})=>{

    const {name, quantity} =cartItem;
    return(
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}