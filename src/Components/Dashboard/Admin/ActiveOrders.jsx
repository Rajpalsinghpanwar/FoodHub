import React, { useEffect, useState } from "react";
import {
  Timer,
  Bike,
  Bell,
  CheckCircle,
} from "lucide-react";

/* Dummy Active Orders */
const initialOrders = [
  {
    id: "ORD-2041",
    customer: "Rohit Mehra",
    status: "preparing",
    deliveryPartner: {
      name: "Rakesh Kumar",
      phone: "9876543210",
    },
    remainingTime: 18, // minutes
  },
  {
    id: "ORD-2042",
    customer: "Anjali Gupta",
    status: "ready",
    deliveryPartner: {
      name: "Suresh Yadav",
      phone: "9123456789",
    },
    remainingTime: 0,
  },
];

export default function ActiveOrders() {
  const [orders, setOrders] = useState(initialOrders);

  /* Countdown Timer */
  useEffect(() => {
    const timer = setInterval(() => {
      setOrders((prev) =>
        prev.map((order) =>
          order.status === "preparing" && order.remainingTime > 0
            ? { ...order, remainingTime: order.remainingTime - 1 }
            : order
        )
      );
    }, 60000); // 1 min

    return () => clearInterval(timer);
  }, []);

  const markReady = (id) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, status: "ready", remainingTime: 0 } : o
      )
    );
  };

  const notifyPartner = (name) => {
    alert(`Delivery partner ${name} notified 📢`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">
        Active Orders
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
                className={`px-4 py-1 rounded-full text-xs font-semibold ${
                  order.status === "ready"
                    ? "bg-green-100 text-green-700"
                    : "bg-[#FF5200]/10 text-[#FF5200]"
                }`}
              >
                {order.status === "ready"
                  ? "Ready"
                  : "Preparing"}
              </span>
            </div>

            {/* Delivery Partner */}
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Bike size={18} className="text-[#FF5200]" />
              <div>
                <p className="font-medium">
                  {order.deliveryPartner.name}
                </p>
                <p className="text-xs">
                  {order.deliveryPartner.phone}
                </p>
              </div>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
              <Timer className="text-[#FF5200]" />
              <p className="font-medium">
                {order.status === "ready"
                  ? "Order Ready for Pickup"
                  : `${order.remainingTime} mins remaining`}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  order.status === "ready"
                    ? "bg-green-500 w-full"
                    : "bg-[#FF5200] w-3/4"
                }`}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              {order.status === "preparing" && (
                <button
                  onClick={() => markReady(order.id)}
                  className="flex-1 bg-[#FF5200] text-white py-2 rounded-xl flex items-center justify-center gap-2"
                >
                  <CheckCircle size={18} />
                  Mark as Ready
                </button>
              )}

              <button
                onClick={() =>
                  notifyPartner(order.deliveryPartner.name)
                }
                className="flex-1 border border-[#FF5200] text-[#FF5200] py-2 rounded-xl flex items-center justify-center gap-2"
              >
                <Bell size={18} />
                Notify Partner
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}