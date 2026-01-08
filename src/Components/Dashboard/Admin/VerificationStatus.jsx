import React from "react";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  Image as ImageIcon,
  Check,
} from "lucide-react";

export default function RestaurantVerificationStatus() {
  const verification = {
    status: "Approved",
    fssai: "FSSAI-1234567890",
    approvedOn: "12 Dec 2025",
    documents: [
      { name: "FSSAI License", type: "PDF", status: "Verified" },
      { name: "Restaurant GST Certificate", type: "PDF", status: "Verified" },
      { name: "Owner ID Proof", type: "Image", status: "Verified" },
      { name: "Restaurant Photos", type: "Image", status: "Verified" },
      { name: "Bank Account Proof", type: "PDF", status: "Verified" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 h-[520px] overflow-y-auto no-scrollbar space-y-6 relative">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <ShieldCheck className="text-green-600" size={26} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Restaurant Verification
              </h2>
              <p className="text-sm text-gray-500">
                Verification & compliance details
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between bg-green-50 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" size={26} />
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="text-lg font-bold text-green-600">
                  {verification.status}
                </p>
              </div>
            </div>
            <span className="text-xs text-green-600 font-medium">
              Approved on {verification.approvedOn}
            </span>
          </div>

          {/* FSSAI */}
          <div className="bg-orange-50 rounded-xl p-4">
            <p className="text-xs text-gray-500">FSSAI License Number</p>
            <p className="text-lg font-bold text-gray-800 mt-1">
              {verification.fssai}
            </p>
          </div>

          {/* Documents */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Uploaded Documents
            </h3>

            <div className="space-y-3 pb-24">
              {verification.documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border rounded-lg p-3 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      {doc.type === "PDF" ? (
                        <FileText size={18} className="text-orange-600" />
                      ) : (
                        <ImageIcon size={18} className="text-orange-600" />
                      )}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {doc.name}
                      </p>
                      <p className="text-xs text-gray-500">{doc.type}</p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-semibold">
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Circular Sticky Popup */}
          <div className="sticky bottom-4 flex justify-end">
            <div className="w-14 h-14 bg-green-600 rounded-full shadow-xl flex items-center justify-center">
              <Check className="text-white" size={26} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}