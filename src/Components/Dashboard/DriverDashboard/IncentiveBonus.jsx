import React, { useState } from "react";
import {
  Gift,
  TrendingUp,
  Bell,
  CheckCircle,
  Clock,
  FileText,
  IndianRupee,
  Award,
} from "lucide-react";

/* Dummy Incentive Data */
const incentives = [
  {
    id: 1,
    title: "Complete 10 Deliveries",
    reward: 300,
    completed: 7,
    total: 10,
    eligible: true,
  },
  {
    id: 2,
    title: "Complete 20 Deliveries",
    reward: 700,
    completed: 12,
    total: 20,
    eligible: true,
  },
];

const peakBonuses = [
  { time: "7 PM - 10 PM", bonus: 50 },
  { time: "Weekend Special", bonus: 100 },
];

const bonusHistory = [
  { date: "02 Jan 2026", title: "10 Deliveries Bonus", amount: 300 },
  { date: "28 Dec 2025", title: "Peak Hour Bonus", amount: 150 },
];

const IncentiveBonus = () => {
  const [showNotification] = useState(true);

  return (
    <div className="w-full h-full p-6 space-y-6 overflow-y-auto scrollbar-hide bg-gradient-to-br from-orange-50 to-yellow-50">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-orange-600">
          <Award className="w-6 h-6" /> Incentives & Bonuses
        </h2>

        {showNotification && (
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-medium">
            <Bell className="w-4 h-4" />
            Bonus Unlocked Soon!
          </div>
        )}
      </div>

      {/* Active Incentives */}
      <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Gift className="w-5 h-5 text-orange-500" />
          Active Incentives
        </h3>

        {incentives.map((item) => {
          const progress = (item.completed / item.total) * 100;

          return (
            <div
              key={item.id}
              className="border rounded-xl p-4 space-y-3 hover:shadow transition"
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{item.title}</p>
                <span className="flex items-center text-green-600 font-semibold">
                  <IndianRupee className="w-4 h-4" /> {item.reward}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  {item.completed}/{item.total} Deliveries
                </span>
                <span className="flex items-center gap-1">
                  {item.eligible ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Eligible
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4 text-gray-400" />
                      Locked
                    </>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Peak Hour Bonuses */}
      <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-red-500" />
          Peak Hour Bonuses
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {peakBonuses.map((bonus, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-r from-red-100 to-orange-100 flex justify-between items-center"
            >
              <span className="font-medium">{bonus.time}</span>
              <span className="flex items-center font-semibold text-red-600">
                + <IndianRupee className="w-4 h-4" /> {bonus.bonus}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bonus History */}
      <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-500" />
          Bonus History
        </h3>

        {bonusHistory.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b last:border-none py-2"
          >
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
            <span className="flex items-center text-green-600 font-semibold">
              <IndianRupee className="w-4 h-4" /> {item.amount}
            </span>
          </div>
        ))}
      </div>

      {/* Terms & Conditions */}
      <div className="bg-white rounded-2xl shadow-md p-5 space-y-3">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-600" />
          Terms & Conditions
        </h3>
        <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
          <li>Incentives are valid for a limited time only.</li>
          <li>Peak hour bonuses apply only during defined time slots.</li>
          <li>Incomplete or cancelled deliveries may not count.</li>
          <li>Bonuses are credited within 24 hours.</li>
        </ul>
      </div>
    </div>
  );
};

export default IncentiveBonus;