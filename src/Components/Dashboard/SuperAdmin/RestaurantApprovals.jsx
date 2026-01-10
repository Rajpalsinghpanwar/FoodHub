import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  FileText,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

const restaurantsData = [
  {
    id: "RES001",
    name: "Spice Villa",
    owner: "Rahul Verma",
    documents: ["FSSAI", "GST", "PAN", "Bank Details"],
    compliance: true,
    status: "Pending",
  },
  {
    id: "RES002",
    name: "Urban Biryani",
    owner: "Amit Khan",
    documents: ["FSSAI", "GST"],
    compliance: false,
    status: "Pending",
  },
  {
    id: "RES003",
    name: "Green Bowl",
    owner: "Neha Sharma",
    documents: ["FSSAI", "GST", "PAN", "Bank Details"],
    compliance: true,
    status: "Re-Review",
  },
];

const RestaurantApprovals = () => {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [selected, setSelected] = useState(null);
  const [reason, setReason] = useState("");

  const updateStatus = (id, status, reasonText = "") => {
    setRestaurants((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status, reason: reasonText } : r
      )
    );
    setSelected(null);
    setReason("");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">🍽️ Restaurant Approvals</h1>

      {/* Approval List */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="max-h-[520px] overflow-y-auto scrollbar-hide">
          {restaurants.map((res) => (
            <div
              key={res.id}
              className="border-b p-5 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50"
            >
              <div>
                <h2 className="text-lg font-semibold">{res.name}</h2>
                <p className="text-sm text-gray-500">
                  Owner: {res.owner} • ID: {res.id}
                </p>

                {/* Documents */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {res.documents.map((doc, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full flex items-center gap-1"
                    >
                      <FileText size={12} /> {doc}
                    </span>
                  ))}
                </div>

                {/* Compliance */}
                <div className="flex items-center gap-2 mt-2">
                  {res.compliance ? (
                    <span className="flex items-center gap-1 text-green-600 text-sm">
                      <ShieldCheck size={16} /> Compliance Verified
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-500 text-sm">
                      <AlertTriangle size={16} /> Compliance Issue
                    </span>
                  )}
                </div>
              </div>

              {/* Status + Actions */}
              <div className="flex flex-col gap-2 mt-4 md:mt-0">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium w-fit
                    ${
                      res.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : res.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }
                  `}
                >
                  {res.status}
                </span>

                {res.status !== "Approved" && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateStatus(res.id, "Approved")}
                      className="flex items-center gap-1 px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      <CheckCircle size={16} /> Approve
                    </button>
                    <button
                      onClick={() => setSelected(res)}
                      className="flex items-center gap-1 px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      <XCircle size={16} /> Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rejection Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[90%] max-w-md p-6">
            <h2 className="text-lg font-semibold mb-3">
              Reject {selected.name}
            </h2>

            <textarea
              placeholder="Enter rejection reason..."
              className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-500 outline-none"
              rows="4"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 text-sm bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  updateStatus(selected.id, "Rejected", reason)
                }
                className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantApprovals;