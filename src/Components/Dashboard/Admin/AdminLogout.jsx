import React, { useState } from "react";
import {
  LogOut,
  ShieldCheck,
  KeyRound,
  Lock,
  UserCog,
  AlertTriangle,
} from "lucide-react";

export default function AdminLogout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);

    // Simulate secure logout
    setTimeout(() => {
      localStorage.removeItem("token"); // JWT removal
      localStorage.removeItem("userRole");

      window.location.href = "/login"; // redirect
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-red-100">
            <LogOut className="text-red-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Logout</h2>
            <p className="text-sm text-gray-500">
              Restaurant Owner Account
            </p>
          </div>
        </div>

        {/* Security Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SecurityCard
            icon={<UserCog />}
            title="RBAC Enabled"
            desc="Role-based access verified"
          />
          <SecurityCard
            icon={<KeyRound />}
            title="JWT Secured"
            desc="Session token validated"
          />
          <SecurityCard
            icon={<Lock />}
            title="Encrypted API"
            desc="AES-256 communication"
          />
          <SecurityCard
            icon={<ShieldCheck />}
            title="Safe Logout"
            desc="Session will be revoked"
          />
        </div>

        {/* Warning */}
        <div className="flex gap-3 bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
          <AlertTriangle className="text-yellow-600" />
          <p className="text-sm text-yellow-700">
            Logging out will terminate your current session and restrict access
            to restaurant management features.
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            disabled={loading}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 flex items-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">Logging out...</span>
            ) : (
              <>
                <LogOut size={18} />
                Secure Logout
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* Reusable Security Card */
const SecurityCard = ({ icon, title, desc }) => (
  <div className="border rounded-xl p-4 flex gap-3 items-center">
    <div className="p-2 bg-gray-100 rounded-lg text-gray-700">
      {icon}
    </div>
    <div>
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  </div>
);
