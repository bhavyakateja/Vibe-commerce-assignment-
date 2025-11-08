import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, total, removeFromCart, addToCart, decreaseQty } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty 🛒</h2>
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart, total } });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Your Cart</h2>

      <table className="w-full border-collapse mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-center">Price</th>
            <th className="p-3 text-center">Quantity</th>
            <th className="p-3 text-center">Total</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id || item.name} className="border-b text-center">
              <td className="p-3 text-left">{item.name}</td>
              <td className="p-3">₹{item.price}</td>
              <td className="p-3">
                <button
                  onClick={() => decreaseQty(item)}
                  className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                >
                  −
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </td>
              <td className="p-3">₹{item.price * item.quantity}</td>
              <td className="p-3">
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Total: ₹{Math.round(total)}</h3>

        <div className="flex gap-4">
          <Link
            to="/"
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Continue Shopping
          </Link>

          <button
            onClick={handleCheckout}
            className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;