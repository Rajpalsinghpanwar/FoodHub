import React, { useState } from "react";
import {
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  XCircle,
  Clock,
  PlusCircle,
} from "lucide-react";

const completedOrders = [
  { id: "ORD-201", status: "Completed", amount: "₹450" },
  { id: "ORD-202", status: "Completed", amount: "₹820" },
];

const cancelledOrders = [
  { id: "ORD-203", status: "Cancelled", reason: "Customer no-show" },
];

const faqs = [
  {
    q: "How do I track my support ticket?",
    a: "You can track your ticket from the Support Ticket History section.",
  },
  {
    q: "How long does support take to respond?",
    a: "Our team usually responds within 24 hours.",
  },
  {
    q: "Can I reopen a closed ticket?",
    a: "Yes, you can reopen tickets within 48 hours.",
  },
];

const tickets = [
  { id: "TCK-101", subject: "Payment issue", status: "Open" },
  { id: "TCK-102", subject: "Order delay", status: "Resolved" },
];

export default function AdminHelpAndSupport() {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <HelpCircle className="w-7 h-7 text-indigo-600" /> Help & Support
          </h1>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700">
            <PlusCircle className="w-5 h-5" /> Raise Ticket
          </button>
        </div>

        {/* Orders Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="font-semibold text-lg mb-4">Completed Orders</h2>
            <ul className="space-y-3">
              {completedOrders.map((o) => (
                <li
                  key={o.id}
                  className="flex justify-between items-center bg-green-50 p-3 rounded-xl"
                >
                  <span>{o.id}</span>
                  <span className="flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" /> {o.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="font-semibold text-lg mb-4">Cancelled Orders</h2>
            <ul className="space-y-3">
              {cancelledOrders.map((o) => (
                <li
                  key={o.id}
                  className="flex justify-between items-center bg-red-50 p-3 rounded-xl"
                >
                  <span>{o.id}</span>
                  <span className="flex items-center gap-1 text-red-600">
                    <XCircle className="w-4 h-4" /> {o.reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-xl mb-4">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-xl">
                <button
                  onClick={() => setSelectedFAQ(selectedFAQ === idx ? null : idx)}
                  className="w-full text-left px-4 py-3 font-medium flex justify-between"
                >
                  {faq.q}
                  <span>{selectedFAQ === idx ? "−" : "+"}</span>
                </button>
                {selectedFAQ === idx && (
                  <p className="px-4 pb-4 text-gray-600">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Tickets */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="font-semibold text-lg mb-4">Support Ticket History</h2>
            <ul className="space-y-3">
              {tickets.map((t) => (
                <li
                  key={t.id}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-xl"
                >
                  <div>
                    <p className="font-medium">{t.subject}</p>
                    <p className="text-sm text-gray-500">{t.id}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                      t.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    <Clock className="w-4 h-4" /> {t.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Support */}
          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="font-semibold text-lg mb-4">Contact Support</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-indigo-50 p-3 rounded-xl">
                <Phone className="text-indigo-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 bg-indigo-50 p-3 rounded-xl">
                <Mail className="text-indigo-600" />
                <span>support@foodapp.com</span>
              </div>
              <div className="flex items-center gap-3 bg-indigo-50 p-3 rounded-xl">
                <MessageCircle className="text-indigo-600" />
                <span>Live Chat Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

