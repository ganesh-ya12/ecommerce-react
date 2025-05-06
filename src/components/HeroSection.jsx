export default function HeroSection() {
    return (
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Product with Us</h1>
          <p className="text-lg opacity-90 mb-6">Discover the latest trends and high-quality products for your lifestyle.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/products" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100">Shop Now</a>
            <a href="/deals" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600">View Deals</a>
          </div>
        </div>
      </section>
    );
  }
  