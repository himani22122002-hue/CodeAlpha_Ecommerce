import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deliveryCharge = totalItems > 0 ? 50 : 0;
  const grandTotal = totalPrice + deliveryCharge;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>

        <Link
          to="/products"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>

                <p className="text-sm text-gray-500">{item.category}</p>

                <p className="font-bold text-orange-600">
                  ₹{item.price.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(item._id)}
                  className="w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  -
                </button>

                <span className="font-semibold w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item._id)}
                  className="w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <p className="font-bold">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </p>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
          <h2 className="text-xl font-bold mb-4">Summary</h2>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span>₹{deliveryCharge}</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Grand Total</span>

              <span className="text-orange-600">
                ₹{grandTotal.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}