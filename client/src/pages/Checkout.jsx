import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    paymentMethod: "cod",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryCharge = totalItems > 0 ? 50 : 0;
  const grandTotal = subtotal + deliveryCharge;

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      return setError("Your cart is empty.");
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      return setError("Phone number must contain exactly 10 digits.");
    }

    if (!/^\d{6}$/.test(formData.pinCode)) {
      return setError("PIN Code must contain exactly 6 digits.");
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return setError("Please enter a valid email.");
    }

    setError("");
    setLoading(true);

    const paymentMethods = {
      cod: "Cash on Delivery",
      upi: "UPI",
      card: "Card",
    };

    const orderData = {
      customerName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.pinCode}`,
      products: cart.map((item) => ({
        productId: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: grandTotal,
      paymentMethod: paymentMethods[formData.paymentMethod],
    };

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to place order");
      }

      alert("Order Placed Successfully!");

      clearCart();

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {error && (
        <div className="mb-4 rounded-lg bg-red-100 text-red-700 p-3">
          {error}
        </div>
      )}

      <form
        onSubmit={handlePlaceOrder}
        className="grid lg:grid-cols-2 gap-8"
      >
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-bold mb-4">
              Shipping Information
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="col-span-2 p-3 border rounded-xl"
                required
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="p-3 border rounded-xl"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 border rounded-xl"
                required
              />

              <input
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleInputChange}
                className="col-span-2 p-3 border rounded-xl"
                required
              />

              <input
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="p-3 border rounded-xl"
                required
              />

              <input
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                className="p-3 border rounded-xl"
                required
              />

              <input
                name="pinCode"
                placeholder="PIN Code"
                value={formData.pinCode}
                onChange={handleInputChange}
                className="p-3 border rounded-xl"
                required
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-bold mb-4">
              Payment Method
            </h2>

            {["cod", "upi", "card"].map((method) => (
              <label
                key={method}
                className="flex items-center gap-3 mb-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={formData.paymentMethod === method}
                  onChange={handleInputChange}
                />

                <span>
                  {method === "cod"
                    ? "Cash on Delivery"
                    : method.toUpperCase()}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">
          <h2 className="text-xl font-bold mb-4">
            Order Summary
          </h2>

          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-4 mb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="font-bold">
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </p>
            </div>
          ))}

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹{deliveryCharge}</span>
            </div>

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>

              <span className="text-orange-600">
                ₹{grandTotal.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold disabled:bg-gray-400"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  );
}