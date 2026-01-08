import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

/* ---------------- Single Restaurant Data ---------------- */

const restaurant = {
  name: "Spicy Bites",
  logo: "https://i.pinimg.com/736x/0c/ed/b0/0cedb031dd636fd1a11948f97fc3d89a.jpg",
  status: "Approved",
  totalOrders: 120,
  totalRevenue: 24560,
};

/* Weekly Sales */
const weeklySales = [
  { day: "Mon", sales: 3200 },
  { day: "Tue", sales: 2800 },
  { day: "Wed", sales: 3600 },
  { day: "Thu", sales: 3400 },
  { day: "Fri", sales: 4200 },
  { day: "Sat", sales: 4800 },
  { day: "Sun", sales: 4560 },
];

/* Popular Dishes (with images) */
const popularDishes = [
  {
    name: "Chicken Biryani",
    orders: 220,
    image:
      "https://images.unsplash.com/photo-1604908177225-6d45aa8b38c0?w=100",
  },
  {
    name: "Paneer Butter Masala",
    orders: 180,
    image:
      "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=100",
  },
  {
    name: "Butter Naan",
    orders: 160,
    image:
      "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=100",
  },
  {
    name: "Veg Hakka Noodles",
    orders: 120,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=100",
  },
  {
    name: "Chicken Tikka",
    orders: 95,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=100",
  },
];

/* ---------------- Dashboard ---------------- */

export default function SingleRestaurantDashboard() {
  const avgOrderValue = Math.round(
    restaurant.totalRevenue / restaurant.totalOrders
  );

  return (
    <div className="p-6 bg-gray-50 h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={restaurant.logo}
            alt="restaurant logo"
            className="w-14 h-14 rounded-xl object-cover border shadow-sm"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            {restaurant.name}
          </h1>
        </div>

        <span className="px-4 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-600">
          ● {restaurant.status}
        </span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Total Orders" value={restaurant.totalOrders} />
        <KpiCard
          title="Total Revenue"
          value={`₹${restaurant.totalRevenue.toLocaleString()}`}
        />
        <KpiCard title="Average Order Value" value={`₹${avgOrderValue}`} />
        <KpiCard title="Today's Orders" value={28} />
      </div>

      {/* Chart + Popular Dishes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-5">
          <h2 className="font-semibold text-gray-700 mb-4">
            Weekly Sales Overview
          </h2>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={weeklySales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#FF5200"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Popular Dishes (Scrollable) */}
        <div className="bg-white rounded-2xl shadow p-5 flex flex-col">
          <h2 className="font-semibold text-gray-700 mb-4">
            Popular Dishes
          </h2>

          <ul className="space-y-4 overflow-y-auto pr-2 h-64">
            {popularDishes.map((dish, index) => (
              <li
                key={index}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-10 h-10 rounded-lg object-cover border"
                  />
                  <span className="font-medium text-gray-700 text-sm">
                    {dish.name}
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">
                  {dish.orders} orders
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Reusable KPI Card ---------------- */

function KpiCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800 mt-1">
        {value}
      </p>
    </div>
  );
}