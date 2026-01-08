import React, { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Bell,
  CheckCircle,
  Truck,
  Clock,
} from "lucide-react";

/* Utility: hide scrollbar */
const hideScrollbar = `
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
const hideScrollbarWebkit = `
  &::-webkit-scrollbar {
    display: none;
  }
`;

const orderStages = [
  "Order Confirmed",
  "Preparing",
  "Out for Delivery",
  "Near Your Location",
  "Delivered",
];

const LiveTracking = () => {
  const [currentStage, setCurrentStage] = useState(2);
  const [eta, setEta] = useState(18); // minutes
  const [notification, setNotification] = useState(
    "Your order is out for delivery 🚴‍♂️"
  );

  /* Simulate live updates */
  useEffect(() => {
    const timer = setInterval(() => {
      setEta((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full h-full max-h-screen overflow-y-auto p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg"
      style={{ ...JSON.parse(JSON.stringify({})), ...{ cssText: hideScrollbar + hideScrollbarWebkit } }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Live Order Tracking
        </h2>
        <div className="flex items-center gap-2 text-orange-600">
          <Bell size={18} />
          <span className="text-sm font-medium">Notifications On</span>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-56 rounded-xl overflow-hidden mb-4 border">
        <iframe
          title="Live Map"
          className="w-full h-full"
          src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </div>

      {/* ETA & Status */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
          <Clock className="text-orange-500" />
          <div>
            <p className="text-xs text-gray-500">ETA</p>
            <p className="font-semibold text-gray-800">
              {eta} mins
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
          <Truck className="text-green-500" />
          <div>
            <p className="text-xs text-gray-500">Status</p>
            <p className="font-semibold text-gray-800">
              {orderStages[currentStage]}
            </p>
          </div>
        </div>
      </div>

      {/* Order Progress */}
      <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
        <p className="font-semibold text-gray-800 mb-3">
          Order Progress
        </p>
        <div className="space-y-3">
          {orderStages.map((stage, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <CheckCircle
                size={18}
                className={
                  index <= currentStage
                    ? "text-green-500"
                    : "text-gray-300"
                }
              />
              <span
                className={`text-sm ${
                  index <= currentStage
                    ? "text-gray-800 font-medium"
                    : "text-gray-400"
                }`}
              >
                {stage}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Partner */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
        <p className="font-semibold text-gray-800 mb-3">
          Delivery Partner
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
              RK
            </div>
            <div>
              <p className="font-medium text-gray-800">
                Rakesh Kumar
              </p>
              <p className="text-xs text-gray-500">
                Delivery Executive
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500 text-white text-sm hover:bg-green-600 transition">
            <Phone size={14} />
            Call
          </button>
        </div>
      </div>

      {/* Notification Message */}
      <div className="bg-orange-100 border border-orange-200 rounded-xl p-3 text-sm text-orange-700">
        📢 {notification}
      </div>
    </div>
  );
};

export default LiveTracking;