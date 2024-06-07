import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Component } from "react";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductItemDetails from "./components/ProductItemDetails";
import CartContext from "./CartContext";

import "./App.css";

class App extends Component {
  state = { cartList: [] };

  addCartItem = (product) => {
    const { cartList } = this.state;
    const ifProduct = cartList.find((eachCartItem) => eachCartItem.id === product.id);
    if (ifProduct) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if(eachCartItem.id === ifProduct.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity
            return {...eachCartItem, quantity:updatedQuantity}
          }
          return eachCartItem
        })
      }))
    } else {
      this.setState((prevState) => ({
        cartList: [...prevState.cartList, product],
      }));
    }
  };

  deleteCartItem = (id) => {
    const { cartList } = this.state;
    const afterDeleteCartItem = cartList.filter(
      (eachCartItem) => eachCartItem.id !== id
    );
    this.setState({ cartList: afterDeleteCartItem });
  };

  incrementCartProduct = (id) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.map((eachCartItem) => {
        if (eachCartItem.id === id) {
          const updatedQuantity = eachCartItem.quantity + 1;
          return { ...eachCartItem, quantity: updatedQuantity };
        }
        return eachCartItem;
      }),
    }));
  };

  decrementCartProduct = (id) => {
    const { cartList } = this.state;
    const product = cartList.find((eachCartItem) => eachCartItem.id === id);

    if (product.quantity > 1) {
      this.setState((prevState) => ({
        cartList: prevState.cartList.map((eachCartItem) => {
          if (eachCartItem.id === id) {
            const updatedQuantity = eachCartItem.quantity - 1;
            return { ...eachCartItem, quantity: updatedQuantity };
          }
          return eachCartItem;
        }),
      }));
    } else {
      this.deleteCartItem(id);
    }
  };

  removeAllCartItems = () => {
    this.setState({ cartList: [] });
  };

  render() {
    const { cartList } = this.state;
    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
            removeAllCartItems: this.removeAllCartItems,
            incrementCartProduct: this.incrementCartProduct,
            decrementCartProduct: this.decrementCartProduct,
          }}
        >
          <Routes>
            <Route exact path="/login" element={<LoginForm />} />
            <Route
              exact
              path="/"
              element={<ProtectedRoute component={Home} />}
            />
            <Route
              exact
              path="/products"
              element={<ProtectedRoute component={Products} />}
            />
            <Route
              exact
              path="/cart"
              element={<ProtectedRoute component={Cart} />}
            />
            <Route
              exact
              path="/products/:id"
              element={<ProtectedRoute component={ProductItemDetails} />}
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
