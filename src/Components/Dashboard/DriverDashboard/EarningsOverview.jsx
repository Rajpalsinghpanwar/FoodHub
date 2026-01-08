import React from "react";
import {
  IndianRupee,
  TrendingUp,
  Target,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

/* ---------------- Dummy Data ---------------- */
const summary = {
  today: 1250,
  weekly: 8450,
  monthly: 32500,
};

const breakdown = [
  { name: "Base Fare", amount: 6200 },
  { name: "Distance Pay", amount: 4800 },
  { name: "Peak Hour Bonus", amount: 2100 },
  { name: "Tips", amount: 1350 },
];

const earningsData = [
  { day: "Mon", earnings: 900, hours: 5 },
  { day: "Tue", earnings: 1200, hours: 6 },
  { day: "Wed", earnings: 700, hours: 4 },
  { day: "Thu", earnings: 1500, hours: 7 },
  { day: "Fri", earnings: 1800, hours: 8 },
  { day: "Sat", earnings: 2100, hours: 9 },
  { day: "Sun", earnings: 1250, hours: 6 },
];

const goals = {
  dailyTarget: 1500,
  dailyAchieved: 1250,
  weeklyTarget: 9000,
  weeklyAchieved: 8450,
};

/* ---------------- Component ---------------- */
export default function EarningsOverview() {
  const dailyProgress =
    (goals.dailyAchieved / goals.dailyTarget) * 100;
  const weeklyProgress =
    (goals.weeklyAchieved / goals.weeklyTarget) * 100;

  return (
    <div className="h-[calc(100vh-80px)] overflow-y-auto hide-scrollbar bg-gray-50">
      <div className="p-6 space-y-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800">
          💰 Earnings Overview
        </h1>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <SummaryCard
            title="Today’s Earnings"
            value={summary.today}
            icon={<IndianRupee />}
            gradient="from-green-500 to-emerald-600"
          />
          <SummaryCard
            title="Weekly Earnings"
            value={summary.weekly}
            icon={<TrendingUp />}
            gradient="from-blue-500 to-indigo-600"
          />
          <SummaryCard
            title="Monthly Earnings"
            value={summary.monthly}
            icon={<Target />}
            gradient="from-purple-500 to-pink-600"
          />
        </div>

        {/* Earnings Breakdown */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">
            Earnings Breakdown
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {breakdown.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gray-100 flex justify-between"
              >
                <span className="text-gray-600">{item.name}</span>
                <span className="font-bold text-gray-800">
                  ₹{item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          <ChartCard title="Daily Earnings">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="earnings" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Online Hours vs Earnings">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line dataKey="hours" />
                <Line dataKey="earnings" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Target Progress */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-6">
            🎯 Target Progress
          </h2>

          <ProgressBar
            label="Daily Target"
            achieved={goals.dailyAchieved}
            target={goals.dailyTarget}
            progress={dailyProgress}
          />

          <ProgressBar
            label="Weekly Target"
            achieved={goals.weeklyAchieved}
            target={goals.weeklyTarget}
            progress={weeklyProgress}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------- Reusable Components ---------------- */

function SummaryCard({ title, value, icon, gradient }) {
  return (
    <div
      className={`rounded-2xl p-6 text-white bg-gradient-to-r ${gradient} shadow-lg`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm opacity-90">{title}</p>
          <h2 className="text-2xl font-bold">₹{value}</h2>
        </div>
        <div className="p-3 bg-white/20 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

function ProgressBar({ label, achieved, target, progress }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium">
          ₹{achieved} / ₹{target}
        </span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-500"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}