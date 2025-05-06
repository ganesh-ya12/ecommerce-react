import { ShoppingCart, User, Heart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ cartCount, toggleCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">ShopEasy</Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/products" className="text-gray-800 hover:text-blue-600 font-medium">Products</Link>
            <Link to="/deals" className="text-gray-800 hover:text-blue-600 font-medium">Deals</Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 font-medium">About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-blue-600"><Search size={20} /></button>
            <button className="hidden md:block text-gray-700 hover:text-blue-600"><User size={20} /></button>
            <button className="hidden md:block text-gray-700 hover:text-blue-600"><Heart size={20} /></button>
            <button onClick={toggleCart} className="relative text-gray-700 hover:text-blue-600">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>
              )}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-inner">
          <nav className="flex flex-col space-y-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-blue-600 py-2">Home</Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-blue-600 py-2">Products</Link>
            <Link to="/deals" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-blue-600 py-2">Deals</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-blue-600 py-2">About</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-blue-600 py-2">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

