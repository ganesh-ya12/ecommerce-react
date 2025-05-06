import { Heart, Star } from 'lucide-react';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition">
      <div className="relative">
        <div className="h-48 bg-gray-200"></div>
        <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm">
          <Heart size={18} className="text-gray-500 hover:text-red-500" />
        </button>
        {product.onSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className={i < product.rating ? "text-yellow-400" : "text-gray-300"} fill={i < product.rating ? "currentColor" : "none"} />
          ))}
        </div>
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex justify-between items-center">
          <div>
            {product.onSale ? (
              <div className="flex items-center">
                <span className="text-red-600 font-medium">${product.salePrice}</span>
                <span className="text-gray-400 text-sm line-through ml-2">${product.price}</span>
              </div>
            ) : (
              <span className="font-medium">${product.price}</span>
            )}
          </div>
          <button onClick={() => addToCart(product)} className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
