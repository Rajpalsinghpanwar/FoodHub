import React, { useState } from "react";
import {
  User,
  ShieldCheck,
  ShieldX,
  IndianRupee,
  TrendingUp,
  Power,
  Ban,
} from "lucide-react";

const deliveryPartnersData = [
  {
    id: 1,
    name: "Amit Sharma",
    phone: "+91 98765 43210",
    vehicle: "Bike",
    verified: true,
    status: "Online",
    deliveries: 1240,
    rating: 4.7,
    earnings: 28450,
    incentives: 3200,
  },
  {
    id: 2,
    name: "Rahul Verma",
    phone: "+91 91234 56789",
    vehicle: "Scooter",
    verified: false,
    status: "Offline",
    deliveries: 430,
    rating: 4.2,
    earnings: 11200,
    incentives: 900,
  },
];

export default function DeliveryPartners() {
  const [partners, setPartners] = useState(deliveryPartnersData);

  const toggleStatus = (id) => {
    setPartners((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "Online" ? "Offline" : "Online" }
          : p
      )
    );
  };

  const suspendPartner = (id) => {
    setPartners((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Delivery Partners Management
        </h1>
      </div>

      {/* Partner Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition"
          >
            {/* Top Section */}
            <div className="p-5 border-b flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {partner.name}
                </h2>
                <p className="text-sm text-gray-500">{partner.phone}</p>
                <p className="text-xs text-gray-400">
                  Vehicle: {partner.vehicle}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  partner.status === "Online"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {partner.status}
              </span>
            </div>

            {/* Verification */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {partner.verified ? (
                  <ShieldCheck className="text-green-600" size={20} />
                ) : (
                  <ShieldX className="text-red-500" size={20} />
                )}
                <span className="text-sm font-medium">
                  {partner.verified ? "Verified" : "Documents Pending"}
                </span>
              </div>

              <button
                onClick={() => toggleStatus(partner.id)}
                className="flex items-center gap-1 text-xs px-3 py-1 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
              >
                <Power size={14} />
                Toggle
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 px-4 pb-4">
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-500">Deliveries</p>
                <p className="text-lg font-semibold">
                  {partner.deliveries}
                </p>
                <p className="text-xs text-yellow-600">
                  ⭐ {partner.rating} Rating
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-500">Earnings</p>
                <p className="text-lg font-semibold flex items-center gap-1">
                  <IndianRupee size={16} />
                  {partner.earnings}
                </p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp size={14} /> Incentives ₹{partner.incentives}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="px-4 pb-4">
              <button
                onClick={() => suspendPartner(partner.id)}
                className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded-xl text-sm font-medium hover:bg-red-100"
              >
                <Ban size={16} />
                Block / Suspend Account
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}