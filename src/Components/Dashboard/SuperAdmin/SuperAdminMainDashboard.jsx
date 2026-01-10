import React from "react";
import {
  Users,
  Store,
  Bike,
  ShoppingBag,
  IndianRupee,
  TrendingUp,
  AlertCircle,
  Clock,
  CheckCircle,
} from "lucide-react";

const StatCard = ({ icon: Icon, title, value, change }) => (
  <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition ">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        {change && (
          <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
            <TrendingUp size={14} /> {change}
          </p>
        )}
      </div>
      <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
        <Icon size={24} />
      </div>
    </div>
  </div>
);

const SuperAdminMainDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen overflow-y-auto scrollbar-hide ">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
        <p className="text-gray-500">
          System overview & real-time platform performance
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Total Users"
          value="42,580"
          change="+8.2%"
        />
        <StatCard
          icon={Store}
          title="Restaurants"
          value="3,240"
          change="+5.1%"
        />
        <StatCard
          icon={Bike}
          title="Delivery Partners"
          value="1,860"
          change="+3.6%"
        />
        <StatCard
          icon={ShoppingBag}
          title="Total Orders"
          value="89,210"
          change="+12.4%"
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Active vs Inactive */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="font-semibold mb-4">
            Active vs Inactive Status
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Active Restaurants</span>
              <span className="font-semibold text-green-600">2,780</span>
            </div>
            <div className="flex justify-between">
              <span>Inactive Restaurants</span>
              <span className="font-semibold text-red-500">460</span>
            </div>
            <div className="flex justify-between">
              <span>Active Delivery Partners</span>
              <span className="font-semibold text-green-600">1,420</span>
            </div>
            <div className="flex justify-between">
              <span>Inactive Delivery Partners</span>
              <span className="font-semibold text-red-500">440</span>
            </div>
          </div>
        </div>

        {/* Live Orders */}
        <div className="bg-white rounded-xl shadow-sm p-5 lg:col-span-2">
          <h2 className="font-semibold mb-4">Live Orders Snapshot</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2">Order ID</th>
                  <th>Restaurant</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "#ORD1023",
                    rest: "Spice Hub",
                    status: "Preparing",
                    amount: "₹420",
                  },
                  {
                    id: "#ORD1024",
                    rest: "Burger Town",
                    status: "Out for Delivery",
                    amount: "₹650",
                  },
                  {
                    id: "#ORD1025",
                    rest: "Pizza Point",
                    status: "Pending",
                    amount: "₹310",
                  },
                ].map((order) => (
                  <tr
                    key={order.id}
                    className="border-b last:border-none"
                  >
                    <td className="py-2 font-medium">{order.id}</td>
                    <td>{order.rest}</td>
                    <td>
                      <span className="px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-600">
                        {order.status}
                      </span>
                    </td>
                    <td className="font-semibold">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Revenue & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Revenue */}
        <div className="bg-white rounded-xl shadow-sm p-5 lg:col-span-2">
          <h2 className="font-semibold mb-4">
            Revenue & Growth Analytics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h3 className="text-xl font-bold flex items-center gap-1">
                <IndianRupee size={18} /> 12.6L
              </h3>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Commission Earned</p>
              <h3 className="text-xl font-bold flex items-center gap-1">
                <IndianRupee size={18} /> 2.1L
              </h3>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Monthly Growth</p>
              <h3 className="text-xl font-bold text-green-600">
                +14.8%
              </h3>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="font-semibold mb-4">System Alerts</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-500" />
              <p className="text-sm">
                12 unresolved order disputes
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-orange-500" />
              <p className="text-sm">
                8 restaurant approvals pending
              </p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" />
              <p className="text-sm">
                15 support tickets awaiting response
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminMainDashboard;