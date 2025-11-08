import { createContext, useContext } from "react";

export const CartContext = createContext();

export const initialState = {
  cartItems: [],
  total: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      let updatedCart;
      if (existingItem) {
        updatedCart = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      const newTotal = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return { ...state, cartItems: updatedCart, total: newTotal };
    }

    case "INCREASE_QTY": {
      const updatedCart = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      const newTotal = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return { ...state, cartItems: updatedCart, total: newTotal };
    }

    case "DECREASE_QTY": {
      const updatedCart = state.cartItems
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0);

      const newTotal = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return { ...state, cartItems: updatedCart, total: newTotal };
    }

    case "REMOVE_ITEM": {
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      const newTotal = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return { ...state, cartItems: updatedCart, total: newTotal };
    }

    case "CLEAR_CART":
      return { cartItems: [], total: 0 };

    default:
      return state;
  }
}

export const useCart = () => useContext(CartContext);