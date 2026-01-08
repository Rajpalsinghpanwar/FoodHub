import React from "react";
import {
  IndianRupee,
  Calendar,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle,
  Banknote,
  ShieldCheck,
} from "lucide-react";

/* Dummy Data */
const payments = [
  {
    id: 1,
    date: "05 Jan 2026",
    amount: 1250,
    status: "Paid",
  },
  {
    id: 2,
    date: "04 Jan 2026",
    amount: 980,
    status: "Pending",
  },
  {
    id: 3,
    date: "02 Jan 2026",
    amount: 720,
    status: "Failed",
  },
];

export default function PaymentHistory() {
  return (
    <div className="w-full h-full bg-gray-50 p-15 rounded-xl space-y-6 overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          💳 Payment History
        </h2>
        <span className="px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
          Settlement: Weekly
        </span>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Total Earnings" value="₹ 2,950" />
        <SummaryCard title="Tax & Deductions" value="₹ 320" />
        <SummaryCard title="Net Payout" value="₹ 2,630" highlight />
      </div>

      {/* Bank Details */}
      <div className="bg-white rounded-xl p-5 shadow-sm border">
        <div className="flex items-center gap-3 mb-4">
          <Banknote className="text-green-600" />
          <h3 className="font-semibold text-lg">Bank Transfer Details</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <p>
            <span className="font-medium">Bank:</span> HDFC Bank
          </p>
          <p>
            <span className="font-medium">Account:</span> **** 4821
          </p>
          <p className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            Verified
          </p>
        </div>
      </div>

      {/* Payment List */}
      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h3 className="font-semibold text-lg mb-4">Payment List</h3>

        <div className="max-h-[280px] overflow-y-scroll scrollbar-hide space-y-3">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                <Calendar className="text-gray-400" />
                <div>
                  <p className="font-medium text-gray-800">
                    {payment.date}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <IndianRupee className="w-4 h-4" />
                    {payment.amount}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <StatusBadge status={payment.status} />
                {payment.status === "Paid" && (
                  <button className="flex items-center gap-1 text-indigo-600 hover:underline text-sm">
                    <Download className="w-4 h-4" />
                    Payslip
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Failed Payment Alert */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3">
        <AlertTriangle className="text-red-500" />
        <div>
          <p className="font-semibold text-red-600">
            Failed Payment Detected
          </p>
          <p className="text-sm text-red-500">
            Payment on <b>02 Jan 2026</b> failed due to bank processing issue.
          </p>
        </div>
      </div>
    </div>
  );
}

/* Reusable Components */

const SummaryCard = ({ title, value, highlight }) => (
  <div
    className={`p-5 rounded-xl shadow-sm border ${
      highlight
        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
        : "bg-white"
    }`}
  >
    <p className="text-sm opacity-80">{title}</p>
    <h3 className="text-2xl font-bold mt-1">{value}</h3>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    Paid: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Failed: "bg-red-100 text-red-600",
  };

  const icons = {
    Paid: <CheckCircle className="w-4 h-4" />,
    Pending: <Clock className="w-4 h-4" />,
    Failed: <XCircle className="w-4 h-4" />,
  };

  return (
    <span
      className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}
    >
      {icons[status]}
      {status}
    </span>
  );
};