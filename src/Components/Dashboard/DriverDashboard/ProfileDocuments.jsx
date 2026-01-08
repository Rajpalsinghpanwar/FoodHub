import React, { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Camera,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Upload,
  Pencil,
} from "lucide-react";

/* ---------------- Dummy Data ---------------- */
const initialDocuments = [
  {
    id: 1,
    name: "Driving License",
    status: "Approved",
    expiry: "2026-05-10",
  },
  {
    id: 2,
    name: "Aadhaar / ID Proof",
    status: "Pending",
    expiry: null,
  },
  {
    id: 3,
    name: "PAN Card",
    status: "Rejected",
    reason: "Blurred image, please re-upload",
    expiry: null,
  },
];

const statusStyles = {
  Approved: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Rejected: "bg-red-100 text-red-700",
};

const statusIcons = {
  Approved: <CheckCircle size={16} />,
  Pending: <Clock size={16} />,
  Rejected: <XCircle size={16} />,
};

const ProfileDocuments = () => {
  const [documents] = useState(initialDocuments);

  return (
    <div className="h-full w-full overflow-y-scroll scrollbar-hide p-6 bg-gray-50 space-y-6">

      {/* ================= Personal Details ================= */}
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6">
        {/* Profile Photo */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border"
            />
            <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full">
              <Camera size={16} />
            </button>
          </div>
          <span className="text-sm text-gray-500">Change Photo</span>
        </div>

        {/* Details */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-3">
            <User />
            <input
              className="bg-transparent outline-none w-full"
              defaultValue="Rajpal Singh"
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-3">
            <Phone />
            <input
              className="bg-transparent outline-none w-full"
              defaultValue="+91 98765 43210"
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-3 md:col-span-2">
            <Mail />
            <input
              className="bg-transparent outline-none w-full"
              defaultValue="rajpal@email.com"
            />
          </div>
        </div>
      </div>

      {/* ================= Documents Section ================= */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Documents & Verification</h2>

        <div className="space-y-4">
          {documents.map((doc) => {
            const isExpiringSoon =
              doc.expiry &&
              new Date(doc.expiry) - new Date() < 1000 * 60 * 60 * 24 * 60;

            return (
              <div
                key={doc.id}
                className="border rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4"
              >
                {/* Doc Info */}
                <div className="flex items-center gap-3 flex-1">
                  <FileText className="text-gray-600" />
                  <div>
                    <p className="font-medium">{doc.name}</p>

                    {doc.expiry && (
                      <p className="text-sm text-gray-500">
                        Expiry: {doc.expiry}
                      </p>
                    )}

                    {doc.reason && (
                      <p className="text-sm text-red-500 mt-1">
                        Reason: {doc.reason}
                      </p>
                    )}

                    {isExpiringSoon && (
                      <p className="flex items-center gap-1 text-sm text-orange-600 mt-1">
                        <AlertTriangle size={14} /> Expiring Soon
                      </p>
                    )}
                  </div>
                </div>

                {/* Status */}
                <span
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusStyles[doc.status]}`}
                >
                  {statusIcons[doc.status]} {doc.status}
                </span>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-gray-100 hover:bg-gray-200">
                    <Upload size={16} /> Upload
                  </button>

                  <button className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-black text-white hover:opacity-90">
                    <Pencil size={16} /> Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= Update Request ================= */}
      <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Need to update documents?</h3>
          <p className="text-sm text-gray-500">
            Request re-verification after updating documents
          </p>
        </div>

        <button className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700">
          Submit Update Request
        </button>
      </div>
    </div>
  );
};

export default ProfileDocuments;