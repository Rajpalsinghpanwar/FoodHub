import React, { useState } from "react";
import {
  User,
  Phone,
  Mail,
  CheckCircle,
  XCircle,
  Bell,
  Lock,
  Save,
} from "lucide-react";

const ProfileSetting = () => {
  const [tab, setTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800">
          Profile Settings
        </h1>

        {/* Order Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatCard
            title="Completed Orders"
            value="1,245"
            icon={CheckCircle}
            color="green"
          />
          <StatCard
            title="Cancelled Orders"
            value="87"
            icon={XCircle}
            color="red"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-3">
          {["profile", "security", "notifications"].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition ${
                tab === item
                  ? "bg-black text-white"
                  : "bg-white border text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow p-6">
          {tab === "profile" && <ProfileTab />}
          {tab === "security" && <SecurityTab />}
          {tab === "notifications" && <NotificationTab />}
        </div>
      </div>
    </div>
  );
};

/* ---------------- Profile Tab ---------------- */
const ProfileTab = () => (
  <div className="space-y-6">
    <h2 className="font-semibold text-lg flex items-center gap-2">
      <User size={18} /> Owner Information
    </h2>

    <div className="grid sm:grid-cols-2 gap-4">
      <Input label="Owner Name" placeholder="Rajpal Singh" />
      <Input label="Email" placeholder="owner@restaurant.com" icon={Mail} />
      <Input label="Phone" placeholder="+91 98765 43210" icon={Phone} />
    </div>

    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
      <Save size={18} /> Update Profile
    </button>
  </div>
);

/* ---------------- Security Tab ---------------- */
const SecurityTab = () => (
  <div className="space-y-6">
    <h2 className="font-semibold text-lg flex items-center gap-2">
      <Lock size={18} /> Change Password
    </h2>

    <div className="grid sm:grid-cols-2 gap-4">
      <Input label="Current Password" type="password" />
      <Input label="New Password" type="password" />
      <Input label="Confirm New Password" type="password" />
    </div>

    <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
      Change Password
    </button>
  </div>
);

/* ---------------- Notification Tab ---------------- */
const NotificationTab = () => (
  <div className="space-y-4">
    <h2 className="font-semibold text-lg flex items-center gap-2">
      <Bell size={18} /> Notification Preferences
    </h2>

    <Toggle label="Order Updates" />
    <Toggle label="Promotional Offers" />
    <Toggle label="System Alerts" />

    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
      Save Preferences
    </button>
  </div>
);

/* ---------------- Reusable Components ---------------- */
const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
    <div
      className={`p-3 rounded-full bg-${color}-100 text-${color}-600`}
    >
      <Icon />
    </div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-xl font-bold">{value}</h3>
    </div>
  </div>
);

const Input = ({ label, icon: Icon, ...props }) => (
  <div>
    <label className="text-sm text-gray-600">{label}</label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-3 text-gray-400" size={18} />
      )}
      <input
        {...props}
        className={`w-full mt-1 border rounded-lg px-3 py-2 ${
          Icon ? "pl-10" : ""
        } focus:ring-2 focus:ring-black outline-none`}
      />
    </div>
  </div>
);

const Toggle = ({ label }) => (
  <label className="flex items-center justify-between border rounded-lg p-3">
    <span className="text-gray-700">{label}</span>
    <input type="checkbox" className="w-5 h-5 accent-black" />
  </label>
);

export default ProfileSetting;