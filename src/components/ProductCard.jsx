import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-xl shadow-lg p-4 flex flex-col items-center gap-3 hover:shadow-2xl transition-shadow duration-300 bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain"
      />
      <h3 className="text-center font-semibold text-gray-800">{product.title}</h3>
      <p className="text-green-600 font-bold">${product.price}</p>
      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
        >-</button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
          className="w-12 text-center border rounded py-1"
        />
        <button
          onClick={() => setQuantity(q => q + 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
        >+</button>
      </div>
      <button
        onClick={() => addToCart(product, quantity)}
        className="mt-3 w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
