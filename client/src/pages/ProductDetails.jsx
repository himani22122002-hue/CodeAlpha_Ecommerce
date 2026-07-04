import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const products = await response.json();
        const foundProduct = products.find((p) => p._id === id);
        if (!foundProduct) {
          setError("Product not found");
        } else {
          setProduct(foundProduct);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 py-16 text-center">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">{error || "Product Not Found"}</h2>
        <Link to="/products" className="text-purple-600 hover:underline">
          Return to Products
        </Link>
      </div>
    );
  }

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4">{product.category}</p>
          <p className="text-2xl font-semibold text-purple-600 mb-6">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="text-gray-700 mb-8">{product.description}</p>
          
          <div className="flex items-center gap-4 mb-8">
            <button onClick={handleDecrement} className="px-4 py-2 bg-gray-200 rounded-md">-</button>
            <span className="text-xl font-medium">{quantity}</span>
            <button onClick={handleIncrement} className="px-4 py-2 bg-gray-200 rounded-md">+</button>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={handleAddToCart}
              className="bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 rounded-xl py-3 w-full font-semibold shadow-md transition-all duration-300">
              Add to Cart
            </button>
            <Link to="/products" className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl w-full py-3 text-center font-semibold transition-all duration-300">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
