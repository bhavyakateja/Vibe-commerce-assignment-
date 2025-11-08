import React, { useReducer } from "react";
import { CartContext, cartReducer, initialState } from "./CartContext";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const removeFromCart = (product) => dispatch({ type: "REMOVE_ITEM", payload: product });
  const increaseQty = (product) => dispatch({ type: "INCREASE_QTY", payload: product });
  const decreaseQty = (product) => dispatch({ type: "DECREASE_QTY", payload: product });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        cart: state.cartItems,
        total: state.total,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
