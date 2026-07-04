import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);
  
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', address: '', city: '', state: '', pinCode: '', paymentMethod: 'cod'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCharge = 50;
  const grandTotal = totalPrice + (totalItems > 0 ? deliveryCharge : 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.phone)) return setError("Invalid Phone Number (10 digits required)");
    if (!/^\d{6}$/.test(formData.pinCode)) return setError("Invalid PIN Code (6 digits required)");
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return setError("Invalid Email");
    
    setError(null);
    setLoading(true);

    try {
      const orderData = {
        customerName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.pinCode}`,
        products: cart.map(item => ({ product: item._id, quantity: item.quantity })),
        totalAmount: grandTotal,
        paymentMethod: formData.paymentMethod
      };

      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to place order");
      }

      clearCart();
      navigate('/checkout-success');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input name="fullName" placeholder="Full Name" className="col-span-2 p-3 border rounded-xl" onChange={handleInputChange} required />
              <input name="phone" placeholder="Phone Number (10 digits)" className="p-3 border rounded-xl" onChange={handleInputChange} required />
              <input name="email" type="email" placeholder="Email" className="p-3 border rounded-xl" onChange={handleInputChange} required />
              <input name="address" placeholder="Street Address" className="col-span-2 p-3 border rounded-xl" onChange={handleInputChange} required />
              <input name="city" placeholder="City" className="p-3 border rounded-xl" onChange={handleInputChange} required />
              <input name="state" placeholder="State" className="p-3 border rounded-xl" onChange={handleInputChange} required />
              <input name="pinCode" placeholder="PIN Code (6 digits)" className="p-3 border rounded-xl" onChange={handleInputChange} required />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            {['cod', 'upi', 'card'].map(method => (
              <label key={method} className="flex items-center gap-3 mb-2 cursor-pointer">
                <input type="radio" name="paymentMethod" value={method} checked={formData.paymentMethod === method} onChange={handleInputChange} />
                <span className="capitalize">{method === 'cod' ? 'Cash on Delivery' : method.toUpperCase()}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cart.map(item => (
            <div key={item._id} className="flex items-center gap-4 mb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-bold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
            </div>
          ))}
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{totalPrice.toLocaleString('en-IN')}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>₹{deliveryCharge.toLocaleString('en-IN')}</span></div>
            <div className="flex justify-between text-lg font-bold"><span>Total</span><span className="text-orange-600">₹{grandTotal.toLocaleString('en-IN')}</span></div>
          </div>
          <button type="submit" disabled={loading} className="w-full mt-6 bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 disabled:bg-gray-400">
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  );
}
