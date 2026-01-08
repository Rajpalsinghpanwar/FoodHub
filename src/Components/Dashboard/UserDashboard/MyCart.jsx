import React, { useState } from "react";
import {
  Plus,
  Minus,
  Trash2,
  Tag,
  MapPin,
  ShieldCheck,
  Bookmark,
} from "lucide-react";

const initialCart = [
  {
    id: 1,
    name: "Veg Burger",
    price: 120,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
  },
  {
    id: 2,
    name: "French Fries",
    price: 80,
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500",
  },
];

const addresses = [
  "Home – MG Road, Bangalore",
  "Office – Whitefield, Bangalore",
];

const MyCart = () => {
  const [cart, setCart] = useState(initialCart);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [address, setAddress] = useState(addresses[0]);

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "save50") {
      setDiscount(50);
    } else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const deliveryFee = subtotal > 300 ? 0 : 40;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax - discount;

  return (
    <div className="max-w-5xl mx-auto p-4 grid md:grid-cols-3 gap-4">
      {/* Cart Items */}
      <div className="md:col-span-2 bg-white rounded-xl shadow p-4 h-[75vh] overflow-y-auto no-scrollbar">
        <h2 className="text-xl font-bold mb-4">My Cart</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b py-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500">₹{item.price}</p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQty(item.id, "dec")}
                  className="p-1 border rounded"
                >
                  <Minus size={16} />
                </button>
                <span className="px-3">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, "inc")}
                  className="p-1 border rounded"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">
                ₹{item.price * item.qty}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 mt-2"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}

        {/* Save for later */}
        <button className="mt-4 flex items-center gap-2 text-sm text-blue-600">
          <Bookmark size={16} /> Save Cart for Later
        </button>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-xl shadow p-4 h-fit sticky top-4">
        <h3 className="font-semibold mb-3">Order Summary</h3>

        {/* Address */}
        <div className="mb-3">
          <label className="text-sm font-medium flex items-center gap-1">
            <MapPin size={14} /> Delivery Address
          </label>
          <select
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded px-2 py-1 mt-1"
          >
            {addresses.map((addr, i) => (
              <option key={i}>{addr}</option>
            ))}
          </select>
        </div>

        {/* Coupon */}
        <div className="flex gap-2 mb-3">
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon code"
            className="flex-1 border rounded px-2 py-1"
          />
          <button
            onClick={applyCoupon}
            className="bg-black text-white px-3 rounded flex items-center gap-1"
          >
            <Tag size={14} /> Apply
          </button>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (5%)</span>
            <span>₹{tax}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>
          )}
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        {/* Checkout */}
        <button className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition">
          <ShieldCheck size={18} /> Secure Checkout
        </button>
      </div>
    </div>
  );
};

export default MyCart;