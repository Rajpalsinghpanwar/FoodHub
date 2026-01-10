import React, { useState } from "react";
import {
  Download,
  Search,
  Calendar,
  IndianRupee,
  FileText,
  RefreshCcw,
} from "lucide-react";

const ordersData = [
  {
    id: "ORD-10234",
    user: "Amit Sharma",
    restaurant: "Spice Villa",
    date: "2026-01-06",
    payment: "UPI",
    amount: 450,
    status: "Delivered",
    refund: false,
  },
  {
    id: "ORD-10235",
    user: "Neha Verma",
    restaurant: "Burger Hub",
    date: "2026-01-07",
    payment: "Card",
    amount: 320,
    status: "Cancelled",
    refund: true,
  },
  {
    id: "ORD-10236",
    user: "Rahul Mehta",
    restaurant: "Pizza Town",
    date: "2026-01-08",
    payment: "COD",
    amount: 620,
    status: "Refunded",
    refund: true,
  },
];

const statusColor = {
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
  Refunded: "bg-yellow-100 text-yellow-700",
};

export default function AllOrders() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filteredOrders = ordersData.filter(
    (order) =>
      order.id.toLowerCase().includes(search.toLowerCase()) &&
      (status === "" || order.status === status)
  );

  const exportCSV = () => {
    const headers = ["Order ID", "User", "Restaurant", "Date", "Payment", "Amount", "Status"];
    const rows = filteredOrders.map(o =>
      [o.id, o.user, o.restaurant, o.date, o.payment, o.amount, o.status].join(",")
    );

    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "orders-report.csv";
    a.click();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">📜 All Orders</h1>

        <button
          onClick={exportCSV}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          <Download size={18} /> Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute top-3 left-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search Order ID"
            className="pl-10 pr-3 py-2 w-full rounded-lg border focus:ring-2 focus:ring-indigo-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="px-3 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option>Delivered</option>
          <option>Cancelled</option>
          <option>Refunded</option>
        </select>

        <input
          type="date"
          className="px-3 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500"
        />

        <button className="flex items-center justify-center gap-2 bg-gray-200 rounded-lg hover:bg-gray-300">
          <RefreshCcw size={18} /> Reset
        </button>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Order ID</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Restaurant</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Payment</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{order.id}</td>
                <td className="px-4 py-3">{order.user}</td>
                <td className="px-4 py-3">{order.restaurant}</td>
                <td className="px-4 py-3 flex items-center gap-1">
                  <Calendar size={14} /> {order.date}
                </td>
                <td className="px-4 py-3">{order.payment}</td>
                <td className="px-4 py-3 flex items-center gap-1">
                  <IndianRupee size={14} /> {order.amount}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="flex items-center gap-1 text-indigo-600 hover:underline">
                    <FileText size={16} /> Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No orders found
          </div>
        )}
      </div>
    </div>
  );
}