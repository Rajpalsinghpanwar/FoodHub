import React, { useState } from "react";
import {
  Download,
  CheckCircle,
  XCircle,
  Calendar,
  Star,
} from "lucide-react";

/* Dummy Order Data */
const ordersData = [
  {
    id: "ORD-201",
    status: "Completed",
    date: "2026-01-02",
    time: "01:15 PM",
    amount: 680,
    rating: 5,
    feedback: "Amazing food & quick delivery!",
  },
  {
    id: "ORD-202",
    status: "Cancelled",
    date: "2026-01-02",
    time: "02:45 PM",
    amount: 420,
    rating: 2,
    feedback: "Order was cancelled by restaurant",
  },
  {
    id: "ORD-203",
    status: "Completed",
    date: "2026-01-03",
    time: "12:30 PM",
    amount: 950,
    rating: 4,
    feedback: "Good taste, packaging can improve",
  },
  {
    id: "ORD-204",
    status: "Completed",
    date: "2026-01-03",
    time: "08:10 PM",
    amount: 560,
    rating: 5,
    feedback: "Loved it! Will order again",
  },
];

const OrderHistory = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");

  const filteredOrders = ordersData.filter((order) => {
    const statusMatch =
      statusFilter === "All" || order.status === statusFilter;
    const dateMatch = !dateFilter || order.date === dateFilter;
    return statusMatch && dateMatch;
  });

  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Order History
        </h2>

        <div className="flex flex-wrap gap-3">
          {/* Date Filter */}
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="date"
              className="pl-9 pr-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <select
            className="px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Orders</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          {/* Download */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
            <Download className="w-4 h-4" />
            Download Report
          </button>
        </div>
      </div>

      {/* Orders List */}
      <div className="grid gap-4">
        {filteredOrders.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            No orders found
          </p>
        )}

        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-sm p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-md transition"
          >
            {/* Left */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-800">
                  {order.id}
                </span>
                {order.status === "Completed" ? (
                  <span className="flex items-center gap-1 text-green-600 text-xs font-medium">
                    <CheckCircle className="w-4 h-4" />
                    Completed
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-red-600 text-xs font-medium">
                    <XCircle className="w-4 h-4" />
                    Cancelled
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-500">
                {order.date} • {order.time}
              </p>

              <p className="text-sm font-medium text-gray-700">
                Amount: ₹{order.amount}
              </p>
            </div>

            {/* Feedback */}
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < order.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                “{order.feedback}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;