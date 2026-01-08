import React, { useState } from "react";
import {
  Truck,
  IndianRupee,
  Power,
  Star,
  Bell,
  Gift,
  MapPin,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Dashboard() {
  const [online, setOnline] = useState(true);

  const activeDelivery = {
    orderId: "ORD-4582",
    customer: "Rahul Sharma",
    location: "Sector 21, Gurgaon",
    earnings: 120,
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 space-y-6 ">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">👋 Welcome Back</h1>

        <button
          onClick={() => setOnline(!online)}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-white font-semibold shadow-md transition
            ${online ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
        >
          <Power size={18} />
          {online ? "Go Offline" : "Go Online"}
        </button>
      </div>

      {/* STATUS */}
      <div
        className={`p-4 rounded-xl flex items-center gap-3 font-semibold shadow
          ${online ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
      >
        <CheckCircle />
        Status: {online ? "Online & Accepting Orders" : "Offline"}
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <StatCard
          icon={<Truck />}
          title="Today's Deliveries"
          value="8"
          color="bg-blue-500"
        />

        <StatCard
          icon={<IndianRupee />}
          title="Today's Earnings"
          value="₹920"
          color="bg-green-500"
        />

        <StatCard
          icon={<CheckCircle />}
          title="Acceptance Rate"
          value="92%"
          color="bg-indigo-500"
        />

        <StatCard
          icon={<XCircle />}
          title="Cancellation Rate"
          value="4%"
          color="bg-red-500"
        />
      </div>

      {/* ACTIVE DELIVERY */}
      {activeDelivery && (
        <div className="bg-white rounded-xl shadow p-5 space-y-3">
          <h2 className="text-lg font-bold flex items-center gap-2">
            🚚 Active Delivery
          </h2>

          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="font-semibold">
                Order ID: {activeDelivery.orderId}
              </p>
              <p className="text-gray-600">
                {activeDelivery.customer}
              </p>
              <p className="text-sm flex items-center gap-1 text-gray-500">
                <MapPin size={14} />
                {activeDelivery.location}
              </p>
            </div>

            <div className="text-right">
              <p className="text-green-600 font-bold">
                ₹{activeDelivery.earnings}
              </p>
              <button className="mt-2 px-4 py-1 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700">
                View Delivery
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RATING + ALERTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* RATING */}
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <Star className="mx-auto text-yellow-400" size={28} />
          <h3 className="font-bold mt-2">Customer Rating</h3>
          <p className="text-2xl font-bold text-yellow-500">4.8</p>
        </div>

        {/* NEW DELIVERY ALERT */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
          <Bell className="text-blue-600" />
          <div>
            <p className="font-semibold">New Delivery Alert</p>
            <p className="text-sm text-gray-600">
              You have new delivery requests nearby
            </p>
          </div>
        </div>

        {/* INCENTIVES */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
          <Gift className="text-green-600" />
          <div>
            <p className="font-semibold">Incentive Update</p>
            <p className="text-sm text-gray-600">
              Complete 3 more orders to earn ₹150 bonus
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

/* Reusable Stat Card */
function StatCard({ icon, title, value, color }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
      <div className={`${color} p-3 rounded-full text-white`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}