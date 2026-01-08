import React, { useEffect, useState } from "react";
import {
  Power,
  WifiOff,
  BatteryLow,
  Clock,
  Coffee,
} from "lucide-react";

const AvailabilityStatus = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [workingTime, setWorkingTime] = useState(0);
  const [autoOfflineReason, setAutoOfflineReason] = useState(null);

  /* Working hours timer */
  useEffect(() => {
    let timer;
    if (isOnline && !onBreak) {
      timer = setInterval(() => {
        setWorkingTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOnline, onBreak]);

  /* Auto Offline Simulation */
  useEffect(() => {
    if (!isOnline) return;

    const timeout = setTimeout(() => {
      setIsOnline(false);
      setAutoOfflineReason("Low Battery");
    }, 45000); // demo auto offline

    return () => clearTimeout(timeout);
  }, [isOnline]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6 mt-10">
      {/* Status Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Availability Status</h2>
        <span
          className={`px-3 py-1 text-sm rounded-full font-medium ${
            isOnline
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>

      {/* Toggle Button */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {isOnline ? "Receiving Orders" : "Not Accepting Orders"}
        </span>

        <button
          onClick={() => {
            setIsOnline(!isOnline);
            setAutoOfflineReason(null);
          }}
          className={`relative w-16 h-8 rounded-full transition ${
            isOnline ? "bg-green-500" : "bg-gray-400"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition ${
              isOnline ? "translate-x-8" : ""
            }`}
          />
        </button>
      </div>

      {/* Working Hours */}
      <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
        <Clock className="text-blue-500" />
        <div>
          <p className="text-sm text-gray-500">Working Hours</p>
          <p className="font-semibold">{formatTime(workingTime)}</p>
        </div>
      </div>

      {/* Break Mode */}
      <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-xl">
        <div className="flex items-center gap-3">
          <Coffee className="text-yellow-600" />
          <div>
            <p className="font-medium">Break Mode</p>
            <p className="text-xs text-gray-500">
              Pause orders temporarily
            </p>
          </div>
        </div>

        <button
          onClick={() => setOnBreak(!onBreak)}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            onBreak
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {onBreak ? "On Break" : "Start Break"}
        </button>
      </div>

      {/* Auto Offline Conditions */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-600">
          Auto Offline Conditions
        </h3>

        <div className="grid grid-cols-3 gap-3 text-center">
          <Condition icon={BatteryLow} label="Low Battery" />
          <Condition icon={WifiOff} label="Network Issue" />
          <Condition icon={Power} label="Inactive" />
        </div>

        {autoOfflineReason && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm text-center font-medium">
            You are offline due to: {autoOfflineReason}
          </div>
        )}
      </div>
    </div>
  );
};

/* Condition Card */
const Condition = ({ icon: Icon, label }) => (
  <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center gap-1">
    <Icon className="text-gray-500" size={18} />
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);

export default AvailabilityStatus;