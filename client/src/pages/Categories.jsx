import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const categoryInfo = {
  Electronics: {
    description: "Latest gadgets and devices",
    color: "bg-blue-100",
  },
  Fashion: {
    description: "Trendy apparel and clothing",
    color: "bg-pink-100",
  },
  Shoes: {
    description: "Comfortable and stylish footwear",
    color: "bg-orange-100",
  },
  Accessories: {
    description: "Essential add-ons and gear",
    color: "bg-purple-100",
  },
  "Home & Living": {
    description: "Enhance your living space",
    color: "bg-green-100",
  },
  Gadgets: {
    description: "Innovative tech accessories",
    color: "bg-yellow-100",
  },
};

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((products) => {
        const counts = {};

        products.forEach((product) => {
          counts[product.category] = (counts[product.category] || 0) + 1;
        });

        const result = Object.keys(counts).map((name) => ({
          name,
          count: counts[name],
          description:
            categoryInfo[name]?.description || "Browse our collection",
          color: categoryInfo[name]?.color || "bg-gray-100",
        }));

        setCategories(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Loading Categories...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div
              className={`w-12 h-12 ${category.color} rounded-xl mb-4 flex items-center justify-center text-2xl font-bold`}
            >
              {category.name[0]}
            </div>

            <h3 className="text-xl font-bold mb-2">{category.name}</h3>

            <p className="text-gray-500 mb-4">
              {category.description} • {category.count}{" "}
              {category.count === 1 ? "item" : "items"}
            </p>

            <Link
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="text-orange-500 font-semibold hover:underline"
            >
              View Products →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}