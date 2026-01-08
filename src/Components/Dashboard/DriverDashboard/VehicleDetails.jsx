import React, { useState } from "react";
import {
  Bike,
  FileText,
  ShieldCheck,
  AlertTriangle,
  UploadCloud,
  CheckCircle,
  Clock,
} from "lucide-react";

const VehicleDetails = () => {
  const [vehicleType, setVehicleType] = useState("Bike");
  const [regNumber, setRegNumber] = useState("");
  const [verificationStatus] = useState("Pending");

  return (
    <div className="h-full w-full overflow-y-auto scrollbar-hide p-6 bg-gray-50">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Bike className="text-indigo-600" />
        Vehicle Details
      </h2>

      {/* Vehicle Info Card */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Vehicle Information</h3>

        {/* Vehicle Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Vehicle Type
          </label>
          <div className="flex gap-3">
            {["Bike", "Scooter", "Cycle"].map((type) => (
              <button
                key={type}
                onClick={() => setVehicleType(type)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition
                  ${
                    vehicleType === type
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Registration Number */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Registration Number
          </label>
          <input
            type="text"
            placeholder="MH12 AB 1234"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
      </div>

      {/* Documents Upload */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Vehicle Documents</h3>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "RC Book", icon: FileText },
            { title: "Insurance", icon: ShieldCheck },
            { title: "PUC Certificate", icon: AlertTriangle },
          ].map((doc, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex flex-col items-center justify-center gap-3 hover:shadow-md transition"
            >
              <doc.icon className="text-indigo-600" size={28} />
              <p className="text-sm font-medium">{doc.title}</p>
              <button className="flex items-center gap-2 text-sm text-indigo-600 hover:underline">
                <UploadCloud size={16} />
                Upload
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Status */}
      <div className="bg-white rounded-xl shadow p-6 mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Verification Status</h3>
          <p className="text-sm text-gray-500">
            Your vehicle verification is under review
          </p>
        </div>

        <span
          className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2
            ${
              verificationStatus === "Verified"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {verificationStatus === "Verified" ? (
            <CheckCircle size={16} />
          ) : (
            <Clock size={16} />
          )}
          {verificationStatus}
        </span>
      </div>

      {/* Expiry Reminders */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">
          Vehicle Expiry Reminders
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 border rounded-lg">
            <p className="text-sm">Insurance Expiry</p>
            <span className="text-sm font-medium text-red-600">
              12 Days Left
            </span>
          </div>

          <div className="flex justify-between items-center p-3 border rounded-lg">
            <p className="text-sm">PUC Expiry</p>
            <span className="text-sm font-medium text-yellow-600">
              25 Days Left
            </span>
          </div>
        </div>
      </div>

      {/* Update Button */}
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
          Update Vehicle Information
        </button>
      </div>
    </div>
  );
};

export default VehicleDetails;