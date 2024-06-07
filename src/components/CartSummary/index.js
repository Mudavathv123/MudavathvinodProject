// Write your code here
import './index.css'
import CartContext from '../../CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      cartList.forEach(eachCart => {
        totalAmount += eachCart.price * eachCart.quantity
      })

      const noOfItems = cartList.length
      console.log(totalAmount)
      return (
        <div className="cart-summary-container">
          <div className="card">
            <h1 className="card-head">
              Order Total: <span className="total"> Rs {totalAmount}/-</span>
            </h1>
            <p className="no-of-items">{noOfItems} items in cart</p>
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
