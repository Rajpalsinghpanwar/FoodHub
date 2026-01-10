import React, { useState } from "react";
import {
  Clock,
  MapPin,
  Bike,
  Store,
  AlertTriangle,
  CheckCircle,
  Truck,
} from "lucide-react";

const liveOrdersData = [
  {
    id: "ORD-1023",
    customer: "Rahul Sharma",
    restaurant: "Spice Hub",
    deliveryPartner: "Amit Kumar",
    status: "Preparing",
    eta: "25 mins",
    distance: "4.2 km",
  },
  {
    id: "ORD-1024",
    customer: "Priya Verma",
    restaurant: "Pizza Palace",
    deliveryPartner: "Rohit Singh",
    status: "Out for Delivery",
    eta: "12 mins",
    distance: "2.1 km",
  },
];

const statusColors = {
  Preparing: "bg-yellow-100 text-yellow-700",
  "Out for Delivery": "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
};

const LiveOrders = () => {
  const [orders, setOrders] = useState(liveOrdersData);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          🔴 Live Orders
        </h1>
        <span className="text-sm text-gray-500">
          Real-time order monitoring
        </span>
      </div>

      {/* Orders List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-lg">{order.id}</h2>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
              >
                {order.status}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <Store className="inline w-4 h-4 mr-1" />
                Restaurant:{" "}
                <span className="font-medium text-gray-800">
                  {order.restaurant}
                </span>
              </p>
              <p>
                <Bike className="inline w-4 h-4 mr-1" />
                Delivery Partner:{" "}
                <span className="font-medium text-gray-800">
                  {order.deliveryPartner}
                </span>
              </p>
              <p>
                <Clock className="inline w-4 h-4 mr-1" />
                ETA: {order.eta} • {order.distance}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="px-4 py-2 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                View Live Map
              </button>

              <button className="px-4 py-2 text-xs rounded-lg bg-yellow-500 text-white hover:bg-yellow-600">
                Reassign Partner
              </button>

              <button className="px-4 py-2 text-xs rounded-lg bg-red-500 text-white hover:bg-red-600 flex items-center gap-1">
                <AlertTriangle size={14} />
                Manual Action
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Map Placeholder */}
      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
          <MapPin className="w-5 h-5" /> Live Map Tracking (Optional)
        </h2>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
          Google Maps / Mapbox Integration Placeholder
        </div>
      </div>
    </div>
  );
};

export default LiveOrders;