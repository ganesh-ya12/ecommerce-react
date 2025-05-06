import ProductCard from '../components/ProductCard';

const sampleProducts = [
  { id: 1, name: 'Gadget X', price: 99.99, salePrice: 79.99, rating: 4, onSale: true },
  { id: 2, name: 'Headphones Pro', price: 149.99, rating: 5, onSale: false },
  // Add more...
];

export default function Products({ addToCart }) {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
