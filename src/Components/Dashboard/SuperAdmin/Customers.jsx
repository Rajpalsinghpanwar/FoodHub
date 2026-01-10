import React, { useState } from "react";
import {
  User,
  ShoppingBag,
  Ban,
  CheckCircle,
  IndianRupee,
  AlertTriangle,
} from "lucide-react";

const initialCustomers = [
  {
    id: "CUST001",
    name: "Amit Sharma",
    email: "amit@gmail.com",
    phone: "+91 98765 43210",
    status: "Active",
    orders: 24,
    lastOrder: "05 Jan 2026",
    totalSpend: 12450,
    refunds: 1,
    disputes: 0,
  },
  {
    id: "CUST002",
    name: "Neha Verma",
    email: "neha@gmail.com",
    phone: "+91 99887 66554",
    status: "Blocked",
    orders: 9,
    lastOrder: "20 Dec 2025",
    totalSpend: 4210,
    refunds: 2,
    disputes: 1,
  },
  {
    id: "CUST003",
    name: "Rahul Mehta",
    email: "rahul@gmail.com",
    phone: "+91 91234 56789",
    status: "Active",
    orders: 41,
    lastOrder: "07 Jan 2026",
    totalSpend: 21300,
    refunds: 0,
    disputes: 0,
  },
];

const Customers = () => {
  const [customers, setCustomers] = useState(initialCustomers);

  const toggleStatus = (id) => {
    setCustomers((prev) =>
      prev.map((cust) =>
        cust.id === id
          ? {
              ...cust,
              status: cust.status === "Active" ? "Blocked" : "Active",
            }
          : cust
      )
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Customers Management
        </h1>
        <p className="text-sm text-gray-500">
          View, monitor, and manage platform customers
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
          <User className="text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Total Customers</p>
            <h2 className="text-xl font-bold">{customers.length}</h2>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
          <CheckCircle className="text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Active Users</p>
            <h2 className="text-xl font-bold">
              {customers.filter((c) => c.status === "Active").length}
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
          <Ban className="text-red-600" />
          <div>
            <p className="text-sm text-gray-500">Blocked Users</p>
            <h2 className="text-xl font-bold">
              {customers.filter((c) => c.status === "Blocked").length}
            </h2>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left">Customer</th>
                <th className="px-4 py-3 text-left">Orders</th>
                <th className="px-4 py-3 text-left">Last Order</th>
                <th className="px-4 py-3 text-left">Spend</th>
                <th className="px-4 py-3 text-left">Refunds</th>
                <th className="px-4 py-3 text-left">Disputes</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((cust) => (
                <tr
                  key={cust.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">
                    <p className="font-semibold">{cust.name}</p>
                    <p className="text-xs text-gray-500">{cust.email}</p>
                    <p className="text-xs text-gray-400">{cust.phone}</p>
                  </td>

                  <td className="px-4 py-3 flex items-center gap-1">
                    <ShoppingBag size={14} /> {cust.orders}
                  </td>

                  <td className="px-4 py-3">{cust.lastOrder}</td>

                  <td className="px-4 py-3 flex items-center gap-1">
                    <IndianRupee size={14} /> {cust.totalSpend}
                  </td>

                  <td className="px-4 py-3 text-blue-600 font-medium">
                    {cust.refunds}
                  </td>

                  <td className="px-4 py-3 text-red-600 font-medium">
                    {cust.disputes}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        cust.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {cust.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => toggleStatus(cust.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                        cust.status === "Active"
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      {cust.status === "Active" ? "Block" : "Unblock"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {customers.length === 0 && (
          <div className="p-6 text-center text-gray-500 flex flex-col items-center gap-2">
            <AlertTriangle />
            No customers found
          </div>
        )}
      </div>
    </div>
  );
};

export default Customers;