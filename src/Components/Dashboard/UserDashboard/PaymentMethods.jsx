import React, { useState } from "react";
import {
  CreditCard,
  Wallet,
  ShieldCheck,
  Plus,
  CheckCircle,
  Trash2,
} from "lucide-react";

const PaymentMethods = () => {
  const [methods, setMethods] = useState([
    {
      id: 1,
      type: "card",
      name: "HDFC Credit Card",
      detail: "**** **** **** 4832",
      default: true,
    },
    {
      id: 2,
      type: "upi",
      name: "UPI ID",
      detail: "rajpal@upi",
      default: false,
    },
  ]);

  const [walletBalance] = useState(650);

  const setDefault = (id) => {
    setMethods(
      methods.map((m) => ({ ...m, default: m.id === id }))
    );
  };

  const removeMethod = (id) => {
    setMethods(methods.filter((m) => m.id !== id));
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Payment Methods
        </h2>
        <ShieldCheck className="text-green-600" />
      </div>

      {/* Wallet Section */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Wallet className="text-indigo-600" />
          <div>
            <p className="text-sm text-gray-600">Wallet Balance</p>
            <p className="text-lg font-bold text-indigo-700">
              ₹{walletBalance}
            </p>
          </div>
        </div>
        <button className="text-sm font-medium text-indigo-600 hover:underline">
          Use Wallet
        </button>
      </div>

      {/* Saved Methods */}
      <div className="space-y-4 max-h-[300px] overflow-y-auto scrollbar-hide">
        {methods.map((method) => (
          <div
            key={method.id}
            className={`border rounded-xl p-4 flex items-center justify-between transition ${
              method.default
                ? "border-green-500 bg-green-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <CreditCard className="text-gray-700" />
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  {method.name}
                </p>
                <p className="text-sm text-gray-500">
                  {method.detail}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {method.default ? (
                <span className="flex items-center text-sm text-green-600 gap-1">
                  <CheckCircle size={16} /> Default
                </span>
              ) : (
                <button
                  onClick={() => setDefault(method.id)}
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Set Default
                </button>
              )}

              <button
                onClick={() => removeMethod(method.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Method */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
          <Plus size={18} /> Add Card / UPI
        </button>

        <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
          One-Click Checkout
        </button>
      </div>

      {/* Security Note */}
      <p className="mt-5 text-xs text-gray-500 flex items-center gap-1">
        <ShieldCheck size={14} className="text-green-600" />
        All payments are secured with end-to-end encryption.
      </p>
    </div>
  );
};

export default PaymentMethods;