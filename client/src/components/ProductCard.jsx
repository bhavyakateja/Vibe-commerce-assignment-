import { useState } from "react";
import { useCart } from "../context/CartContext.js";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.title, // ✅ Map title to name for cart consistency
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="p-4 border rounded-md shadow-md flex flex-col items-center bg-white hover:shadow-lg transition">
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-40 object-contain mb-3"
      />
      <h2 className="text-lg font-semibold text-center">{product.title}</h2>
      <p className="text-gray-600 text-sm text-center mb-2">
        {product.category}
      </p>
      <p className="text-gray-800 font-medium mb-2">₹{product.price}</p>

      {added ? (
        <p className="text-green-600 font-medium">✅ Added to cart!</p>
      ) : (
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;