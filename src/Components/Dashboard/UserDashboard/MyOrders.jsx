import React from "react";
import {
  Download,
  Star,
  RotateCcw,
  Clock,
  IndianRupee,
} from "lucide-react";

/* Dummy Orders Data */
const orders = [
  {
    id: "ORD12345",
    restaurant: "Spice Hub",
    amount: 420,
    date: "07 Jan 2026",
    time: "12:45 PM",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1604908177225-6b1c7c29e78b?w=500",
  },
  {
    id: "ORD12346",
    restaurant: "Burger Town",
    amount: 299,
    date: "05 Jan 2026",
    time: "8:15 PM",
    status: "Delivered",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
  },
  {
    id: "ORD12347",
    restaurant: "Pizza Planet",
    amount: 550,
    date: "02 Jan 2026",
    time: "9:30 PM",
    status: "Cancelled",
    image:
      "https://images.unsplash.com/photo-1548365328-8b849e6c7c7f?w=500",
  },
];

const MyOrders = () => {
  return (
    <div className="w-full h-full bg-gray-50 p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      {/* Scrollable Container */}
      <div className="space-y-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col md:flex-row gap-4"
          >
            {/* Image */}
            <img
              src={order.image}
              alt={order.restaurant}
              className="w-full md:w-32 h-32 object-cover rounded-xl"
            />

            {/* Order Info */}
            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">
                    {order.restaurant}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Order ID: {order.id}
                  </p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Date & Amount */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {order.date}, {order.time}
                </div>
                <div className="flex items-center gap-1 font-semibold text-gray-800">
                  <IndianRupee size={16} />
                  {order.amount}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                  <Download size={16} />
                  Invoice
                </button>

                <button className="flex items-center gap-1 text-sm text-green-600 hover:underline">
                  <RotateCcw size={16} />
                  Reorder
                </button>

                <button className="flex items-center gap-1 text-sm text-yellow-600 hover:underline">
                  <Star size={16} />
                  Rate Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scrollbar Hide Style */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MyOrders;