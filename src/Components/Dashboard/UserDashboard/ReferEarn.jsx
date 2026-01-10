import React, { useState } from "react";
import {
  Gift,
  Share2,
  Copy,
  Wallet,
  Users,
  IndianRupee,
} from "lucide-react";

const referralHistoryData = [
  {
    id: 1,
    name: "Amit Sharma",
    date: "12 Jan 2026",
    reward: 150,
    status: "Credited",
  },
  {
    id: 2,
    name: "Priya Verma",
    date: "18 Jan 2026",
    reward: 200,
    status: "Pending",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    date: "22 Jan 2026",
    reward: 100,
    status: "Credited",
  },
];

const ReferEarn = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = "RAJPAL25";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="h-full overflow-y-auto scrollbar-hide p-4 md:p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Refer & Earn</h2>
        <p className="text-gray-500 text-sm">
          Invite friends & earn rewards 💸
        </p>
      </div>

      {/* Referral Code Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm opacity-90">Your Referral Code</p>
            <h3 className="text-3xl font-bold tracking-wider mt-1">
              {referralCode}
            </h3>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg"
            >
              <Copy size={18} />
            </button>
            <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {copied && (
          <p className="text-sm mt-2 text-green-200">
            Code copied to clipboard!
          </p>
        )}
      </div>

      {/* Wallet & Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <Wallet className="text-indigo-600" />
          <div>
            <p className="text-sm text-gray-500">Wallet Balance</p>
            <h4 className="text-xl font-bold flex items-center gap-1">
              <IndianRupee size={18} /> 1,250
            </h4>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <Users className="text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Total Referrals</p>
            <h4 className="text-xl font-bold">18</h4>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <Gift className="text-pink-600" />
          <div>
            <p className="text-sm text-gray-500">Total Earnings</p>
            <h4 className="text-xl font-bold flex items-center gap-1">
              <IndianRupee size={18} /> 2,450
            </h4>
          </div>
        </div>
      </div>

      {/* Referral History */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h3 className="text-lg font-semibold mb-4">
          Referral History
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Reward</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {referralHistoryData.map((ref) => (
                <tr
                  key={ref.id}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="py-3">{ref.name}</td>
                  <td>{ref.date}</td>
                  <td className="font-medium">
                    ₹{ref.reward}
                  </td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        ref.status === "Credited"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {ref.status}
                    </span>
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

export default ReferEarn;