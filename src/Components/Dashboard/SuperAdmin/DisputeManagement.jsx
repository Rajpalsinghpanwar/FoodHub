import React, { useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  User,
  Eye,
  MessageSquare,
  IndianRupee,
} from "lucide-react";

const disputesData = [
  {
    id: "ORD-10021",
    customer: "Rahul Sharma",
    issue: "Wrong Item Delivered",
    amount: 420,
    status: "Open",
    agent: null,
  },
  {
    id: "ORD-10045",
    customer: "Neha Verma",
    issue: "Late Delivery",
    amount: 250,
    status: "In Review",
    agent: "Admin A",
  },
  {
    id: "ORD-10089",
    customer: "Amit Singh",
    issue: "Refund Request",
    amount: 680,
    status: "Resolved",
    agent: "Admin B",
  },
];

const statusStyles = {
  Open: "bg-red-100 text-red-600",
  "In Review": "bg-yellow-100 text-yellow-600",
  Resolved: "bg-green-100 text-green-600",
  Rejected: "bg-gray-200 text-gray-600",
};

export default function DisputeManagement() {
  const [disputes, setDisputes] = useState(disputesData);

  const updateStatus = (id, status) => {
    setDisputes((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status } : d))
    );
  };

  const assignAgent = (id, agent) => {
    setDisputes((prev) =>
      prev.map((d) => (d.id === id ? { ...d, agent } : d))
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <AlertTriangle className="text-red-500" />
        Dispute Management
      </h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Issue</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Agent</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((d) => (
              <tr
                key={d.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">{d.id}</td>
                <td className="p-4">{d.customer}</td>
                <td className="p-4">{d.issue}</td>
                <td className="p-4 flex items-center gap-1">
                  <IndianRupee size={14} /> {d.amount}
                </td>

                <td className="p-4">
                  <select
                    className="border rounded-lg px-2 py-1 text-sm"
                    value={d.agent || ""}
                    onChange={(e) =>
                      assignAgent(d.id, e.target.value)
                    }
                  >
                    <option value="">Assign</option>
                    <option value="Admin A">Admin A</option>
                    <option value="Admin B">Admin B</option>
                    <option value="Support 1">Support 1</option>
                  </select>
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[d.status]}`}
                  >
                    {d.status}
                  </span>
                </td>

                <td className="p-4 flex gap-2">
                  <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
                    <Eye size={16} />
                  </button>
                  <button className="p-2 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200">
                    <MessageSquare size={16} />
                  </button>
                  <button
                    onClick={() => updateStatus(d.id, "Resolved")}
                    className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200"
                  >
                    <CheckCircle size={16} />
                  </button>
                  <button
                    onClick={() => updateStatus(d.id, "Rejected")}
                    className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
                  >
                    <XCircle size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Evidence / Chat Preview Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-3">📎 Evidence Preview</h3>
          <div className="border-dashed border-2 rounded-lg p-4 text-center text-gray-500">
            Uploaded images / invoices will appear here
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-3">💬 Dispute Chat</h3>
          <div className="h-32 overflow-y-auto text-sm text-gray-600 border rounded-lg p-3">
            <p>
              <strong>User:</strong> I received the wrong item.
            </p>
            <p className="mt-2">
              <strong>Support:</strong> We are reviewing your request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}