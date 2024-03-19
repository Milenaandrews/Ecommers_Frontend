import CartContext from '../../../context/cart/CartContext'
import shopIcon from '../../../assets/shopping-bag.svg'
import { useContext } from 'react'
import "./CartIcon.scss"

const CartIcon = () => {

    const {cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext)
    console.log(isCartOpen)
    console.log(setIsCartOpen)
    const handleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={handleCartOpen} >
        <img src={shopIcon} className='shop-icon' alt='cart-icon' />
        <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon