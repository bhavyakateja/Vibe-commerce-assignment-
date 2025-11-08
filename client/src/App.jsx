import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import Checkout from "./components/Checkout.jsx"

function App() {
  return (
    <Router>
      <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
        <Link to="/" className="text-lg font-bold">Vibe Commerce</Link>
        <Link to="/cart" className="hover:text-gray-300">Cart 🛒</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;