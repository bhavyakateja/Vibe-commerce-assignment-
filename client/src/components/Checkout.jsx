import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../services/apiConnection.js";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart = [], total = 0 } = location.state || {};

  const [form, setForm] = useState({ name: "", email: "" });
  const [receipt, setReceipt] = useState(null);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("No items in cart!");
      return;
    }
    try {
      const res = await API.post("/checkout", {
        cartItems: cart.map((i) => ({
          price: i.price,
          quantity: i.quantity,
        })),
        name: form.name,
        email: form.email,
      });

      if (res.data.success) {
        setReceipt(res.data.receipt);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (receipt)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-2">Mock Receipt</h2>
          <p>Name: {receipt.customer.name}</p>
          <p>Email: {receipt.customer.email}</p>
          <p>Total: ₹{receipt.total}</p>
          <p>Date: {new Date(receipt.timestamp).toLocaleString()}</p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-4 py-1 mt-3 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-3">Checkout</h2>
        <p className="mb-4 text-gray-600">Total: ₹{total}</p>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 mb-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <button
          onClick={handleCheckout}
          className="bg-green-600 text-white px-4 py-2 rounded-lg w-full"
        >
          Confirm Checkout
        </button>
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 text-sm mt-2 w-full border rounded py-1"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Checkout;
