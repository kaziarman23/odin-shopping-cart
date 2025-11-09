import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  if (cartItems.length === 0)
    return <p className="p-6 text-center">Your cart is empty.</p>;

  return (
    <div className="p-6 flex flex-col gap-6">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 border p-4 rounded-lg shadow hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-24 object-contain"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-green-600 font-bold">${item.price}</p>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                -
              </button>
              <input
                type="number"
                min="0"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                className="w-14 text-center border rounded py-1"
              />
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
