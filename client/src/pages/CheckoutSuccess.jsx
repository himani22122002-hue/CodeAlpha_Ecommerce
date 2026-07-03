import { Link } from 'react-router-dom';

export default function CheckoutSuccess() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <div className="mb-8">
        <svg className="w-24 h-24 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-4">Thank you for shopping with ShopEase!</h1>
      <p className="text-gray-600 mb-8">Your order has been placed successfully.</p>
      <Link 
        to="/products" 
        className="inline-block bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
