import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products } from '../data/products';

export default function Home() {
  const categories = [
    { name: 'Electronics', icon: '⚡' },
    { name: 'Fashion', icon: '👗' },
    { name: 'Shoes', icon: '👟' },
    { name: 'Accessories', icon: '⌚' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-primary/10 rounded-[2.5rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
            <div className="flex-1 space-y-6 z-10">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">New Arrivals</span>
              <h1 className="text-6xl md:text-7xl font-extrabold text-black leading-tight">Elevate Your Lifestyle.</h1>
              <p className="text-xl text-gray-600 max-w-lg">Discover premium products designed for modern living. Quality and style, delivered to your door.</p>
              <div className="flex gap-4">
                <Link to="/products" className="bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 rounded-xl px-6 py-3 font-semibold shadow-md transition-all duration-300">Shop Now</Link>
                <Link to="/products" className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl px-6 py-3 font-semibold transition-all duration-300">Explore</Link>
              </div>
            </div>
            <div className="flex-1 z-10">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000" alt="Hero" className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(cat => (
                <Link key={cat.name} to="/products" className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-primary/10 transition border border-gray-100">
                    <div className="text-4xl mb-4">{cat.icon}</div>
                    <div className="font-bold text-lg">{cat.name}</div>
                </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
