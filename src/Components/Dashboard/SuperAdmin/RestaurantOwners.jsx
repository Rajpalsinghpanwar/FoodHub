import React, { useState } from "react";
import {
  User,
  FileCheck,
  Store,
  IndianRupee,
  ShieldCheck,
  ShieldAlert,
  Power,
} from "lucide-react";

const RestaurantOwners = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="p-6 bg-gray-100 min-h-screen overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            Restaurant Owner Management
          </h1>
          <button
            onClick={() => setIsActive(!isActive)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition
              ${isActive ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
          >
            <Power size={18} />
            {isActive ? "Disable Access" : "Enable Access"}
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Owner Profile & KYC */}
          <div className="bg-white rounded-xl shadow p-5 space-y-4">
            <div className="flex items-center gap-3">
              <User className="text-blue-500" />
              <h2 className="text-lg font-semibold">Owner Profile</h2>
            </div>

            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Name:</span> Rahul Sharma</p>
              <p><span className="font-medium">Email:</span> rahul@email.com</p>
              <p><span className="font-medium">Phone:</span> +91 98765 43210</p>
            </div>

            <div className="flex items-center gap-2 mt-3 text-sm">
              <FileCheck className="text-green-500" size={18} />
              <span className="text-green-600 font-medium">
                KYC Verified
              </span>
            </div>
          </div>

          {/* Account Verification Status */}
          <div className="bg-white rounded-xl shadow p-5 space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-500" />
              <h2 className="text-lg font-semibold">Account Status</h2>
            </div>

            <div
              className={`p-4 rounded-lg text-sm font-medium flex items-center gap-2
                ${isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {isActive ? <ShieldCheck size={18} /> : <ShieldAlert size={18} />}
              {isActive ? "Account Active & Verified" : "Account Disabled"}
            </div>
          </div>

          {/* Commission & Payout */}
          <div className="bg-white rounded-xl shadow p-5 space-y-4">
            <div className="flex items-center gap-3">
              <IndianRupee className="text-purple-500" />
              <h2 className="text-lg font-semibold">Commission & Payout</h2>
            </div>

            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Commission Rate:</span> 18%
              </p>
              <p>
                <span className="font-medium">Total Earnings:</span> ₹1,25,000
              </p>
              <p>
                <span className="font-medium">Pending Payout:</span> ₹12,500
              </p>
            </div>

            <button className="w-full mt-2 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition">
              View Payout History
            </button>
          </div>
        </div>

        {/* Linked Restaurants */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <Store className="text-orange-500" />
            <h2 className="text-lg font-semibold">Linked Restaurants</h2>
          </div>

          <div className="space-y-4 max-h-72 overflow-y-auto scrollbar-hide">
            {[
              { name: "Spice Villa", status: "Active" },
              { name: "Burger Hub", status: "Active" },
              { name: "Pizza Town", status: "Disabled" },
            ].map((restaurant, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <p className="font-medium">{restaurant.name}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full
                      ${restaurant.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"}`}
                  >
                    {restaurant.status}
                  </span>
                </div>

                <button className="text-sm px-3 py-1 rounded-lg border hover:bg-gray-100 transition">
                  Manage
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RestaurantOwners;