import React, { useState } from "react";
import {
  PackageCheck,
  PackageX,
  IndianRupee,
  Star,
  MapPin,
  Calendar,
  Search,
} from "lucide-react";

/* Dummy Data */
const deliveries = [
  {
    id: "ORD-1024",
    customer: "Amit Sharma",
    pickup: "Spicy Hub Restaurant",
    drop: "Sector 21, Gurgaon",
    date: "06 Jan 2026 • 1:30 PM",
    distance: "5.2 km",
    amount: 180,
    paymentMode: "Online",
    rating: 4.5,
    status: "Completed",
  },
  {
    id: "ORD-1021",
    customer: "Neha Verma",
    pickup: "Burger Town",
    drop: "DLF Phase 3",
    date: "05 Jan 2026 • 8:15 PM",
    distance: "3.8 km",
    amount: 120,
    paymentMode: "Cash",
    rating: null,
    status: "Cancelled",
  },
  // Add more items to see scroll
];

const DeliveryHistory = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Delivery History
        </h1>
        <p className="text-sm text-gray-500">
          Completed & Cancelled deliveries
        </p>
      </div>

      {/* Scrollable Container */}
      <div className="h-[calc(100vh-140px)] overflow-y-auto scrollbar-hide pr-1">
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <SummaryCard title="Total Deliveries" value="128" />
          <SummaryCard title="Total Earnings" value="₹18,450" />
          <SummaryCard title="Completed" value="120" />
          <SummaryCard title="Cancelled" value="8" />
        </div>

        {/* Search */}
        <div className="flex items-center bg-white rounded-lg shadow-sm p-3 mb-6 sticky top-0 z-10">
          <Search className="text-gray-400 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search by Order ID or Customer"
            className="w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Delivery List */}
        <div className="space-y-4 pb-6">
          {deliveries.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-semibold text-gray-800">
                    {order.customer}
                  </h2>
                  <p className="text-xs text-gray-500">{order.id}</p>
                </div>
                <StatusBadge status={order.status} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
                <Info icon={MapPin} text={order.pickup} />
                <Info icon={MapPin} text={order.drop} />
                <Info icon={Calendar} text={order.date} />
                <Info
                  icon={IndianRupee}
                  text={`₹${order.amount} • ${order.paymentMode}`}
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="text-xs text-gray-500">
                  Distance: {order.distance}
                </p>

                {order.rating && (
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-medium">
                      {order.rating}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* Reusable Components */

const SummaryCard = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow-sm p-4">
    <p className="text-xs text-gray-500">{title}</p>
    <h2 className="text-xl font-bold text-gray-800 mt-1">
      {value}
    </h2>
  </div>
);

const StatusBadge = ({ status }) => {
  const isCompleted = status === "Completed";
  return (
    <div
      className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
        ${
          isCompleted
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
    >
      {isCompleted ? (
        <PackageCheck size={14} />
      ) : (
        <PackageX size={14} />
      )}
      {status}
    </div>
  );
};

const Info = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2">
    <Icon size={16} className="text-gray-400" />
    <span>{text}</span>
  </div>
);

export default DeliveryHistory;