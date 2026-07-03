import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl p-4 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 left-3 bg-accent text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Sale 20%</span>
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full text-gray-400 hover:text-accent transition-colors shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-0-6.364L12 12.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
      </div>
      <h3 className="text-xs text-gray-400 uppercase tracking-wide mb-1">{product.category}</h3>
      <h4 className="text-base font-semibold text-gray-900 mb-2 truncate">{product.name}</h4>
      <div className="flex items-center gap-1 text-yellow-400 mb-3">
        {[...Array(5)].map((_, i) => <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-xs text-gray-400 line-through">₹{product.oldPrice.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Link to={`/products/${product.id}`} className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl py-3 text-sm font-semibold transition-all duration-300">View</Link>
        <button 
            onClick={() => addToCart(product)}
            className="flex-1 bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 rounded-xl py-3 w-full font-semibold shadow-md transition-all duration-300"
        >
            Add to Cart
        </button>
      </div>
    </div>
  );
}
