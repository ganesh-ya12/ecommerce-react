import { X } from 'lucide-react';

export default function CartSidebar({ items, onClose, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + (item.salePrice || item.price), 0).toFixed(2);

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart ({items.length})</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex border-b pb-4">
            <div className="w-20 h-20 bg-gray-200 rounded-md mr-3 flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">${(item.salePrice || item.price).toFixed(2)}</p>
              <button onClick={() => onRemove(index)} className="text-red-500 text-sm mt-2">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>${subtotal}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
