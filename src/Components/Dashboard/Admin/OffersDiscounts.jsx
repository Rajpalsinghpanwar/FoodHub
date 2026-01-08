import React, { useState } from "react";
import {
  BadgePercent,
  PlusCircle,
  Pencil,
  Ban,
  Calendar,
  IndianRupee,
  CheckCircle,
  XCircle,
} from "lucide-react";

const initialOffers = [
  {
    id: 1,
    name: "New Year Bonanza",
    type: "Percentage",
    value: 20,
    minOrder: 299,
    validTill: "2026-01-15",
    active: true,
  },
  {
    id: 2,
    name: "Flat ₹100 OFF",
    type: "Flat",
    value: 100,
    minOrder: 499,
    validTill: "2026-01-20",
    active: false,
  },
];

export default function OffersDiscounts() {
  const [offers, setOffers] = useState(initialOffers);
  const [showModal, setShowModal] = useState(false);

  const toggleOffer = (id) => {
    setOffers(
      offers.map((offer) =>
        offer.id === id ? { ...offer, active: !offer.active } : offer
      )
    );
  };

  return (
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Offers & Discounts</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
        >
          <PlusCircle size={18} />
          Create Offer
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Completed Orders"
          value="1,248"
          icon={<CheckCircle className="text-green-600" />}
        />
        <SummaryCard
          title="Cancelled Orders"
          value="86"
          icon={<XCircle className="text-red-500" />}
        />
        <SummaryCard
          title="Offer Revenue"
          value="₹1,42,560"
          icon={<IndianRupee className="text-blue-600" />}
        />
      </div>

      {/* Offers Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="p-4 border-b flex items-center gap-2 font-semibold text-lg">
          <BadgePercent className="text-orange-500" />
          Active Offers
        </div>

        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3 text-left">Offer Name</th>
              <th className="p-3 text-center">Discount</th>
              <th className="p-3 text-center">Min Order</th>
              <th className="p-3 text-center">Validity</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {offers.map((offer) => (
              <tr
                key={offer.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium text-left">
                  {offer.name}
                </td>

                <td className="p-3 text-center">
                  {offer.type === "Flat"
                    ? `₹${offer.value}`
                    : `${offer.value}%`}
                </td>

                <td className="p-3 text-center">₹{offer.minOrder}</td>

                <td className="p-3 text-center">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} />
                    {offer.validTill}
                  </span>
                </td>

                <td className="p-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      offer.active
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {offer.active ? "Active" : "Disabled"}
                  </span>
                </td>

                <td className="p-3 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600 hover:scale-110">
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => toggleOffer(offer.id)}
                      className="text-red-500 hover:scale-110"
                    >
                      <Ban size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-bold">Create New Offer</h3>

            <input className="w-full border rounded-lg p-2" placeholder="Offer Name" />
            <select className="w-full border rounded-lg p-2">
              <option>Percentage</option>
              <option>Flat</option>
            </select>
            <input type="number" className="w-full border rounded-lg p-2" placeholder="Discount Value" />
            <input type="number" className="w-full border rounded-lg p-2" placeholder="Minimum Order" />
            <input type="date" className="w-full border rounded-lg p-2" />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const SummaryCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
    <div className="bg-gray-100 p-3 rounded-full">{icon}</div>
  </div>
);