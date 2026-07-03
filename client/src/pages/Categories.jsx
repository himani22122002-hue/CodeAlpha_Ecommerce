import { Link } from 'react-router-dom';
import { products } from '../data/products';

const categoryData = [
  { name: 'Electronics', description: 'Latest gadgets and devices', color: 'bg-blue-100' },
  { name: 'Fashion', description: 'Trendy apparel and clothing', color: 'bg-pink-100' },
  { name: 'Shoes', description: 'Comfortable and stylish footwear', color: 'bg-orange-100' },
  { name: 'Accessories', description: 'Essential add-ons and gear', color: 'bg-purple-100' },
  { name: 'Home & Living', description: 'Enhance your living space', color: 'bg-green-100' },
  { name: 'Gadgets', description: 'Innovative tech accessories', color: 'bg-yellow-100' },
];

export default function Categories() {
  const getProductCount = (categoryName) => {
    return products.filter(p => p.category === categoryName).length;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.map((category) => (
          <div key={category.name} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className={`w-12 h-12 ${category.color} rounded-xl mb-4 flex items-center justify-center font-bold text-2xl`}>
              {category.name[0]}
            </div>
            <h3 className="text-xl font-bold mb-2">{category.name}</h3>
            <p className="text-gray-500 mb-4">{category.description} • {getProductCount(category.name)} items</p>
            <Link 
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="text-orange-500 font-semibold hover:underline"
            >
              View Products &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
