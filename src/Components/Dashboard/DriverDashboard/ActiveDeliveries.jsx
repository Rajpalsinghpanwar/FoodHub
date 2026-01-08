import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle,
  Clock,
  AlertTriangle,
  QrCode,
  ShieldAlert,
} from "lucide-react";

const deliverySteps = [
  "Accepted",
  "Reached Restaurant",
  "Picked Up",
  "Out for Delivery",
  "Delivered",
];

export default function ActiveDeliveries() {
  const [currentStep, setCurrentStep] = useState(2);
  const [otp, setOtp] = useState("");
  const [showIssue, setShowIssue] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 relative">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">🚴 Active Delivery</h1>

      {/* Order Details */}
      <div className="bg-white rounded-2xl shadow p-5 mb-5">
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="font-semibold text-lg">#ORD-45821</p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
            In Progress
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Customer */}
          <div className="border rounded-xl p-4">
            <p className="font-semibold mb-1">Customer</p>
            <p>Rahul Sharma</p>
            <div className="flex gap-3 mt-2">
              <button className="icon-btn">
                <Phone size={18} />
              </button>
              <button className="icon-btn">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>

          {/* Restaurant */}
          <div className="border rounded-xl p-4">
            <p className="font-semibold mb-1">Restaurant</p>
            <p>Spice Hub</p>
            <div className="flex gap-3 mt-2">
              <button className="icon-btn">
                <Phone size={18} />
              </button>
              <button className="icon-btn">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Status */}
      <div className="bg-white rounded-2xl shadow p-5 mb-5">
        <h2 className="font-semibold mb-4">Delivery Status</h2>
        <div className="flex flex-col gap-3">
          {deliverySteps.map((step, index) => (
            <div
              key={step}
              className={`flex items-center gap-3 p-3 rounded-xl ${
                index <= currentStep
                  ? "bg-green-50 text-green-700"
                  : "bg-gray-50 text-gray-400"
              }`}
            >
              <CheckCircle size={18} />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Live Navigation */}
      <div className="bg-white rounded-2xl shadow p-5 mb-5">
        <h2 className="font-semibold mb-3 flex items-center gap-2">
          <MapPin size={18} /> Live Navigation
        </h2>
        <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
          Map Integration Placeholder
        </div>
      </div>

      {/* OTP / QR Verification */}
      <div className="bg-white rounded-2xl shadow p-5 mb-5">
        <h2 className="font-semibold mb-3 flex items-center gap-2">
          <QrCode size={18} /> OTP / QR Verification
        </h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">
            Verify
          </button>
        </div>
      </div>

      {/* Issue Reporting */}
      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="font-semibold mb-3 flex items-center gap-2">
          <AlertTriangle size={18} /> Report Issue
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Order Delay",
            "Address Issue",
            "Customer Unavailable",
          ].map((issue) => (
            <button
              key={issue}
              onClick={() => setShowIssue(true)}
              className="px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100"
            >
              {issue}
            </button>
          ))}
        </div>
      </div>

      {/* Emergency Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-red-600 text-white shadow-lg flex items-center justify-center hover:scale-105 transition">
        <ShieldAlert />
      </button>

      {/* Issue Modal */}
      {showIssue && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md">
            <h3 className="font-semibold mb-3">Describe the Issue</h3>
            <textarea
              rows="4"
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Write issue details..."
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowIssue(false)}
                className="px-4 py-2 rounded-xl border"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Utility styles */}
      <style>
        {`
          .icon-btn {
            background: #f3f4f6;
            padding: 0.5rem;
            border-radius: 9999px;
            transition: all 0.2s;
          }
          .icon-btn:hover {
            background: #e5e7eb;
          }
        `}
      </style>
    </div>
  );
}