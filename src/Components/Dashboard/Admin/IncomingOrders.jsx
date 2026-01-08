import React, { useState } from "react";
import {
  Clock,
  CheckCircle,
  XCircle,
  CreditCard,
  User,
} from "lucide-react";

/* Dummy Orders */
const initialOrders = [
  {
    id: "ORD-1023",
    customer: "Amit Sharma",
    items: [
      {
        name: "Margherita Pizza",
        qty: 1,
        image:
          "https://images.unsplash.com/photo-1601924582975-7aa0f2e1f5e1",
      },
      {
        name: "Garlic Bread",
        qty: 2,
        image:
          "https://images.unsplash.com/photo-1606755962773-d324e3d43c2c",
      },
    ],
    instructions: "Extra cheese, less spicy",
    prepTime: 25,
    payment: "Paid",
    status: "pending",
  },
  {
    id: "ORD-1024",
    customer: "Neha Verma",
    items: [
      {
        name: "Veg Burger",
        qty: 2,
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349",
      },
    ],
    instructions: "No onion",
    prepTime: 15,
    payment: "COD",
    status: "pending",
  },
];

export default function IncomingOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [rejectReason, setRejectReason] = useState("");
  const [rejectingOrder, setRejectingOrder] = useState(null);

  const acceptOrder = (id) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, status: "accepted" } : o
      )
    );
  };

  const rejectOrder = () => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === rejectingOrder
          ? { ...o, status: "rejected", reason: rejectReason }
          : o
      )
    );
    setRejectingOrder(null);
    setRejectReason("");
  };

  const updatePrepTime = (id, time) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, prepTime: time } : o
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">
        Incoming Orders
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow p-6 space-y-4"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">
                {order.id}
              </p>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  order.payment === "Paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                <CreditCard size={12} className="inline mr-1" />
                {order.payment}
              </span>
            </div>

            {/* Customer */}
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <User size={16} /> {order.customer}
            </p>

            {/* Items with Images */}
            <div>
              <p className="font-medium mb-2">Ordered Items</p>

              <div className="space-y-3">
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border rounded-xl p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover border"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.qty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            {order.instructions && (
              <div className="bg-[#FF5200]/10 border border-[#FF5200]/20 rounded-lg p-3 text-sm">
                <span className="font-medium text-[#FF5200]">
                  Instructions:
                </span>{" "}
                {order.instructions}
              </div>
            )}

            {/* Prep Time */}
            <div className="flex items-center gap-3">
              <Clock size={16} />
              <input
                type="number"
                value={order.prepTime}
                onChange={(e) =>
                  updatePrepTime(order.id, e.target.value)
                }
                className="w-24 border rounded-lg px-2 py-1"
              />
              <span className="text-sm text-gray-500">
                mins
              </span>
            </div>

            {/* Actions */}
            {order.status === "pending" && (
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => acceptOrder(order.id)}
                  className="flex-1 bg-[#FF5200] text-white py-2 rounded-xl flex items-center justify-center gap-2"
                >
                  <CheckCircle size={18} />
                  Accept
                </button>
                <button
                  onClick={() => setRejectingOrder(order.id)}
                  className="flex-1 border border-red-500 text-red-500 py-2 rounded-xl flex items-center justify-center gap-2"
                >
                  <XCircle size={18} />
                  Reject
                </button>
              </div>
            )}

            {/* Status */}
            {order.status !== "pending" && (
              <p
                className={`text-sm font-semibold ${
                  order.status === "accepted"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Order {order.status}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Reject Modal */}
      {rejectingOrder && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 space-y-4">
            <h2 className="font-semibold text-lg">
              Reject Order
            </h2>
            <textarea
              placeholder="Enter rejection reason"
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
            <div className="flex gap-3">
              <button
                onClick={rejectOrder}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg"
              >
                Confirm Reject
              </button>
              <button
                onClick={() => setRejectingOrder(null)}
                className="flex-1 border py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}