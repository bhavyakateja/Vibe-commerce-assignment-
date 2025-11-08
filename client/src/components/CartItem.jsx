import { useCart } from "../context/CartContext.js";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <p className="font-medium">{item.productId.name}</p>
        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-gray-700 font-semibold">
          ₹{item.productId.price * item.quantity}
        </p>
        <button
          onClick={() => removeFromCart(item.productId.id)}
          className="text-red-600 hover:text-red-800"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default CartItem;