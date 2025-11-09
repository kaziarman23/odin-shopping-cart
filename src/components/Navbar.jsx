import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="bg-blue-600 text-white flex justify-between p-4 items-center">
      <div className="flex gap-4">
        <Link to="/" className="font-bold hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/cart" className="hover:underline">
          Cart {totalItems > 0 && `(${totalItems})`}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
