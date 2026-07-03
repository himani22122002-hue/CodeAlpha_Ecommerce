import { Link } from 'react-router-dom';
import { FaTruck, FaShieldAlt, FaHeadset, FaStar, FaUsers, FaBoxOpen, FaAward, FaSmile } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-black mb-6">About ShopEase</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ShopEase is your premier online shopping platform, dedicated to providing high-quality products at prices that make sense. We believe in convenience, reliability, and putting our customers first.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>ShopEase began with a simple mission: to bridge the gap between premium product quality and affordable pricing. We noticed that customers often had to choose between reliability and budget, and we knew we could do better.</p>
            <p>From our humble beginnings, we have grown into a trusted marketplace. Our journey has been defined by a relentless focus on customer satisfaction, fast, reliable delivery, and a curated selection of products that bring value to your everyday life.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaStar, title: 'Premium Quality', desc: 'Handpicked products from trusted brands.' },
              { icon: FaTruck, title: 'Fast Delivery', desc: 'Lightning-fast shipping to your doorstep.' },
              { icon: FaShieldAlt, title: 'Secure Payments', desc: 'Safe and encrypted payment gateways.' },
              { icon: FaHeadset, title: '24/7 Support', desc: 'Our team is here whenever you need.' },
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <feature.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: FaBoxOpen, val: '1000+', label: 'Products' },
            { icon: FaUsers, val: '5000+', label: 'Customers' },
            { icon: FaAward, val: '50+', label: 'Brands' },
            { icon: FaSmile, val: '99%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="p-6">
              <stat.icon className="w-10 h-10 mx-auto text-orange-500 mb-4" />
              <div className="text-3xl font-extrabold mb-1">{stat.val}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">Provide high-quality products with an excellent shopping experience that empowers our customers.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">Become India's most trusted online shopping platform through innovation and integrity.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-lg mb-8 opacity-90">Explore thousands of premium products today.</p>
          <Link to="/products" className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
}
