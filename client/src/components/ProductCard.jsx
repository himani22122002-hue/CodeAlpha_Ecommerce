import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <Link
        to={`/products/${product.id}`}
        className="block text-center bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
      >
        View Details
      </Link>
    </div>
  );
}
