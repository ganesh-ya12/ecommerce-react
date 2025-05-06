export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ShopEasy</h3>
              <p className="text-gray-400">Your one-stop destination for quality products at competitive prices.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Products', 'About', 'Contact'].map((link) => (
                  <li key={link}><a href="#" className="text-gray-400 hover:text-white">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Support</h4>
              <ul className="space-y-2">
                {['Shipping', 'Returns', 'Payments', 'Terms'].map((link) => (
                  <li key={link}><a href="#" className="text-gray-400 hover:text-white">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Newsletter</h4>
              <form onSubmit={(e) => e.preventDefault()} className="flex">
                <input
                  type="email"
                  className="flex-1 p-2 text-gray-900 rounded-l-md focus:outline-none"
                  placeholder="Your email"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">Submit</button>
              </form>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400 mt-10">
            &copy; 2025 ShopEasy. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  