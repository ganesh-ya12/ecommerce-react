import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Deals from './pages/Deals';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartItems.length} toggleCart={() => setCartOpen(!cartOpen)} />
      {cartOpen && <CartSidebar items={cartItems} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />}
      
      <main className="pt-20 pb-12">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
