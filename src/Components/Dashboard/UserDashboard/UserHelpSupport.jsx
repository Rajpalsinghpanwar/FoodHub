import React, { useState } from "react";
import {
  HelpCircle,
  MessageSquare,
  Phone,
  PlusCircle,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

const faqs = [
  {
    q: "How do I raise a support ticket?",
    a: "Go to Raise Ticket tab, fill the form and submit your issue.",
  },
  {
    q: "How long does it take to resolve a ticket?",
    a: "Most issues are resolved within 24–48 hours.",
  },
  {
    q: "Can I track my ticket status?",
    a: "Yes, use the Track Ticket tab with your Ticket ID.",
  },
  {
    q: "Is live support available?",
    a: "Live chat & call support are available from 9 AM – 9 PM.",
  },
];

const tickets = [
  {
    id: "TCK1023",
    subject: "Payment not reflected",
    status: "In Progress",
  },
  {
    id: "TCK1011",
    subject: "Order cancellation issue",
    status: "Resolved",
  },
];

const statusColors = {
  Open: "bg-yellow-100 text-yellow-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Resolved: "bg-green-100 text-green-700",
};

export default function UserHelpSupport() {
  const [activeTab, setActiveTab] = useState("faq");
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <HelpCircle className="text-indigo-600" />
        Help & Support
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {[
          { id: "faq", label: "FAQs" },
          { id: "raise", label: "Raise Ticket" },
          { id: "track", label: "Track Ticket" },
          { id: "live", label: "Live Support" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* FAQs */}
      {activeTab === "faq" && (
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 cursor-pointer hover:shadow"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{faq.q}</p>
                <span>{openFaq === index ? "−" : "+"}</span>
              </div>
              {openFaq === index && (
                <p className="text-gray-600 mt-2">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Raise Ticket */}
      {activeTab === "raise" && (
        <div className="bg-white rounded-xl shadow p-6 max-w-xl">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <PlusCircle size={18} /> Raise Support Ticket
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <textarea
              rows="4"
              placeholder="Describe your issue"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
              Submit Ticket
            </button>
          </form>
        </div>
      )}

      {/* Track Ticket */}
      {activeTab === "track" && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 max-w-md">
            <input
              type="text"
              placeholder="Enter Ticket ID"
              className="w-full border rounded-lg px-4 py-2"
            />
            <button className="bg-indigo-600 text-white p-2 rounded-lg">
              <Search size={18} />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 mt-6">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="border rounded-xl p-4 hover:shadow"
              >
                <p className="font-semibold">{ticket.subject}</p>
                <p className="text-sm text-gray-500">ID: {ticket.id}</p>
                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-xs ${statusColors[ticket.status]}`}
                >
                  {ticket.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Live Support */}
      {activeTab === "live" && (
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="border rounded-xl p-6 hover:shadow">
            <MessageSquare className="text-indigo-600 mb-3" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Chat instantly with our support team.
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
              Start Chat
            </button>
          </div>

          <div className="border rounded-xl p-6 hover:shadow">
            <Phone className="text-green-600 mb-3" />
            <h3 className="font-semibold mb-2">Call Support</h3>
            <p className="text-gray-600 mb-4">
              Speak directly with a support executive.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
              Call Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
