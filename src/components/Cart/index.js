import Header from "../Header";
import CartListView from "../CartListView";
import EmptyCartView from "../EmptyCartView";
import CartSummary from "../CartSummary";
import "./index.css";
import CartContext from "../../CartContext";

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList ,removeAllCartItems} = value;
      const showEmptyView = cartList.length === 0;

      const onClickRemoveAllCartItems = () => {
        removeAllCartItems()
      }

      return showEmptyView ? (
        <EmptyCartView />
      ) : (
        <>
          <Header />
          <div className="cart-container">
            <div className="cart-content-container">
              <h1 className="cart-heading">My Cart</h1>
              <div className="remove-all-btn-container">
                  <button
                    className="remove-all-btn"
                    type="button"
                    onClick={onClickRemoveAllCartItems}
                  >
                    Remove All
                  </button>
                </div>
              <CartListView />
              <CartSummary />
            </div>
          </div>
        </>
      );
    }}
  </CartContext.Consumer>
);

export default Cart;
