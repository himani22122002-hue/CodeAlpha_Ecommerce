export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <span className="text-2xl font-bold text-white">ShopEase</span>
          <p className="text-sm">Premium quality products for your lifestyle. Experience the difference with us.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary-500">Home</a></li>
            <li><a href="/products" className="hover:text-primary-500">Products</a></li>
            <li><a href="/cart" className="hover:text-primary-500">Cart</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <p className="text-sm">support@shopease.com</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Newsletter</h4>
          <input type="email" placeholder="Your email" className="w-full bg-gray-800 p-2 rounded-lg text-sm mb-2" />
          <button className="w-full bg-primary-600 text-white p-2 rounded-lg text-sm hover:bg-primary-700">Subscribe</button>
        </div>
      </div>
    </footer>
  );
}
