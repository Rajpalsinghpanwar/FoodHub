import React, { useState } from "react";
import {
  Store,
  ToggleLeft,
  ToggleRight,
  Star,
  AlertCircle,
  CheckCircle,
  RefreshCcw,
} from "lucide-react";

const initialRestaurants = [
  {
    id: 1,
    name: "Spicy Hub",
    owner: "Rahul Verma",
    category: "Fast Food",
    cuisine: "Indian",
    rating: 4.3,
    complaints: 2,
    enabled: true,
    menuActive: true,
    verification: "Approved",
  },
  {
    id: 2,
    name: "Pasta Palace",
    owner: "Neha Sharma",
    category: "Casual Dining",
    cuisine: "Italian",
    rating: 3.8,
    complaints: 5,
    enabled: false,
    menuActive: false,
    verification: "Re-Approval Needed",
  },
  {
    id: 3,
    name: "Sushi Zen",
    owner: "Amit Joshi",
    category: "Fine Dining",
    cuisine: "Japanese",
    rating: 4.7,
    complaints: 1,
    enabled: true,
    menuActive: true,
    verification: "Approved",
  },
];

const RestaurantListings = () => {
  const [restaurants, setRestaurants] = useState(initialRestaurants);

  const toggleStatus = (id) => {
    setRestaurants((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, enabled: !res.enabled } : res
      )
    );
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Store className="text-indigo-600" /> Restaurant Listings
          </h2>
          <span className="text-sm text-gray-500">
            Total Restaurants: {restaurants.length}
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto scrollbar-hide">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-indigo-50 text-gray-600">
                <th className="p-3 text-left">Restaurant</th>
                <th className="p-3">Category</th>
                <th className="p-3">Cuisine</th>
                <th className="p-3">Menu</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Complaints</th>
                <th className="p-3">Status</th>
                <th className="p-3">Verification</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((res) => (
                <tr
                  key={res.id}
                  className="border-b hover:bg-indigo-50 transition"
                >
                  <td className="p-3">
                    <p className="font-semibold text-gray-800">{res.name}</p>
                    <p className="text-xs text-gray-500">
                      Owner: {res.owner}
                    </p>
                  </td>

                  <td className="p-3 text-center">
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">
                      {res.category}
                    </span>
                  </td>

                  <td className="p-3 text-center">
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-xs">
                      {res.cuisine}
                    </span>
                  </td>

                  <td className="p-3 text-center">
                    {res.menuActive ? (
                      <span className="text-green-600 font-medium">
                        Active
                      </span>
                    ) : (
                      <span className="text-red-500 font-medium">
                        Disabled
                      </span>
                    )}
                  </td>

                  <td className="p-3 text-center flex items-center justify-center gap-1">
                    <Star size={14} className="text-yellow-400" />
                    {res.rating}
                  </td>

                  <td className="p-3 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        res.complaints > 3
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {res.complaints}
                    </span>
                  </td>

                  <td className="p-3 text-center">
                    <button onClick={() => toggleStatus(res.id)}>
                      {res.enabled ? (
                        <ToggleRight className="text-green-600" size={24} />
                      ) : (
                        <ToggleLeft className="text-gray-400" size={24} />
                      )}
                    </button>
                  </td>

                  <td className="p-3 text-center">
                    {res.verification === "Approved" ? (
                      <span className="flex items-center justify-center gap-1 text-green-600 text-xs font-semibold">
                        <CheckCircle size={14} /> Approved
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1 text-orange-500 text-xs font-semibold">
                        <AlertCircle size={14} /> Re-Approval
                      </span>
                    )}
                  </td>

                  <td className="p-3 text-center">
                    <button className="flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs hover:bg-indigo-700 transition">
                      <RefreshCcw size={14} />
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RestaurantListings;