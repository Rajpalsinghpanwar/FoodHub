import React, { useEffect, useState } from "react";
import {
  MapPin,
  IndianRupee,
  Timer,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";

const REQUEST_TIME = 30;

export default function NewRequests() {
  const [secondsLeft, setSecondsLeft] = useState(REQUEST_TIME);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionCount, setRejectionCount] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAccept = () => {
    alert("✅ Delivery Accepted");
  };

  const handleReject = () => {
    setRejectionCount((prev) => prev + 1);
    setShowRejectModal(false);
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-white rounded-2xl shadow-lg border p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          New Delivery Request
        </h2>
        <span className="text-xs text-red-600 font-medium">
          {secondsLeft}s left
        </span>
      </div>

      {/* Order Info */}
      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-medium">Order ID:</span> #ORD2345
        </p>

        <p className="font-medium">Spice Hub Restaurant</p>

        <div className="flex items-start gap-2">
          <MapPin size={14} className="mt-1 text-gray-500" />
          <span>MG Road, Bangalore • 2.1 km pickup</span>
        </div>

        <div className="flex items-start gap-2">
          <MapPin size={14} className="mt-1 text-gray-500" />
          <span>Indiranagar • 5.6 km drop</span>
        </div>
      </div>

      {/* Earnings & Time */}
      <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3 mt-4">
        <div className="flex items-center gap-1 text-green-700 font-semibold">
          <IndianRupee size={16} /> 85
        </div>
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <Timer size={16} /> 32 mins
        </div>
      </div>

      {/* Countdown Progress */}
      <div className="mt-3">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-red-500 rounded-full transition-all"
            style={{ width: `${(secondsLeft / REQUEST_TIME) * 100}%` }}
          />
        </div>
      </div>

      {/* Penalty Warning */}
      {rejectionCount >= 2 && (
        <div className="flex items-center gap-2 mt-3 text-xs text-orange-600 bg-orange-50 p-2 rounded-lg">
          <AlertTriangle size={14} />
          Frequent rejections may reduce incentives
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={handleAccept}
          className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
        >
          <CheckCircle size={18} />
          Accept
        </button>

        <button
          onClick={() => setShowRejectModal(true)}
          className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-xl hover:bg-red-700"
        >
          <XCircle size={18} />
          Reject
        </button>
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 w-80">
            <h3 className="font-semibold mb-2 text-gray-800">
              Reject Reason
            </h3>
            <select className="w-full border rounded-lg p-2 mb-3">
              <option>Pickup too far</option>
              <option>Low earnings</option>
              <option>Not available</option>
              <option>Other</option>
            </select>
            <button
              onClick={handleReject}
              className="w-full bg-red-600 text-white py-2 rounded-lg"
            >
              Confirm Reject
            </button>
          </div>
        </div>
      )}
    </div>
  );
}