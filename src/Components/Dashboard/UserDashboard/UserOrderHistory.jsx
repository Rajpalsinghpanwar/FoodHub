import React, { useState } from "react";
import { Search, Calendar, ChevronDown, ChevronUp } from "lucide-react";

/* Dummy Orders Data */
const ordersData = [
  {
    id: "ORD-1024",
    restaurant: "Spicy Hub",
    date: "2025-12-28",
    total: 450,
    status: "Delivered",
    items: [
      { name: "Paneer Butter Masala", qty: 1 },
      { name: "Butter Naan", qty: 2 },
    ],
  },
  {
    id: "ORD-1025",
    restaurant: "Burger Point",
    date: "2025-12-22",
    total: 299,
    status: "Delivered",
    items: [
      { name: "Veg Burger", qty: 2 },
      { name: "French Fries", qty: 1 },
    ],
  },
  {
    id: "ORD-1026",
    restaurant: "Pizza Palace",
    date: "2025-12-15",
    total: 699,
    status: "Delivered",
    items: [{ name: "Cheese Burst Pizza", qty: 1 }],
  },
];

const UserOrderHistory = () => {
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [expandedOrder, setExpandedOrder] = useState(null);

  /* Filtering Logic */
  const filteredOrders = ordersData.filter((order) => {
    const matchSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.restaurant.toLowerCase().includes(search.toLowerCase());

    const orderDate = new Date(order.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    const matchDate =
      (!from || orderDate >= from) && (!to || orderDate <= to);

    return matchSearch && matchDate;
  });

  return (
    <div className="w-full h-full bg-gray-50 p-4 md:p-6 rounded-xl shadow-sm">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4">Order History</h2>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm w-full">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by Order ID or Restaurant"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Date Filters */}
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
          <Calendar size={18} className="text-gray-400" />
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="text-sm outline-none"
          />
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
          <Calendar size={18} className="text-gray-400" />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="text-sm outline-none"
          />
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4 max-h-[60vh] overflow-y-auto scrollbar-hide">
        {filteredOrders.length === 0 && (
          <p className="text-center text-gray-400 text-sm">
            No orders found
          </p>
        )}

        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-sm p-4 transition hover:shadow-md"
          >
            {/* Order Summary */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{order.restaurant}</h3>
                <p className="text-xs text-gray-500">
                  {order.id} • {order.date}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-green-600">
                  ₹{order.total}
                </span>
                <button
                  onClick={() =>
                    setExpandedOrder(
                      expandedOrder === order.id ? null : order.id
                    )
                  }
                  className="text-gray-500 hover:text-black"
                >
                  {expandedOrder === order.id ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </button>
              </div>
            </div>

            {/* Expanded Order Details */}
            {expandedOrder === order.id && (
              <div className="mt-4 border-t pt-3 text-sm text-gray-600">
                <p className="mb-2 font-medium text-gray-700">
                  Order Items:
                </p>
                <ul className="list-disc ml-5 space-y-1">
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} × {item.qty}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {order.status}
                  </span>
                  <button className="text-xs text-blue-600 hover:underline">
                    View Invoice
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrderHistory;