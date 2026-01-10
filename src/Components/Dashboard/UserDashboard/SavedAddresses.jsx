import React, { useState } from "react";
import {
  MapPin,
  Plus,
  Edit2,
  Trash2,
  CheckCircle,
} from "lucide-react";

const initialAddresses = [
  {
    id: 1,
    label: "Home",
    name: "Rajpal Singh",
    phone: "9876543210",
    address: "Flat 302, Green Valley Apartments, Indore",
    isDefault: true,
  },
  {
    id: 2,
    label: "Work",
    name: "Rajpal Singh",
    phone: "9876543210",
    address: "Tech Park, Vijay Nagar, Indore",
    isDefault: false,
  },
];

const SavedAddresses = () => {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    label: "",
    name: "",
    phone: "",
    address: "",
  });

  const handleSave = () => {
    if (editingId) {
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingId ? { ...addr, ...formData } : addr
        )
      );
    } else {
      setAddresses((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...formData,
          isDefault: false,
        },
      ]);
    }
    setFormData({ label: "", name: "", phone: "", address: "" });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (address) => {
    setEditingId(address.id);
    setFormData(address);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  const setDefault = (id) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Saved Addresses</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          <Plus size={18} />
          Add Address
        </button>
      </div>

      {/* Address List */}
      <div className="grid md:grid-cols-2 gap-5">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 relative"
          >
            {addr.isDefault && (
              <span className="absolute top-3 right-3 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-1">
                <CheckCircle size={14} /> Default
              </span>
            )}

            {/* Map Preview */}
            <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center mb-4">
              <MapPin className="text-orange-500" size={32} />
              <span className="ml-2 text-gray-500 text-sm">
                Location Preview
              </span>
            </div>

            <h3 className="font-semibold text-lg">{addr.label}</h3>
            <p className="text-sm text-gray-600">{addr.name}</p>
            <p className="text-sm text-gray-600">{addr.phone}</p>
            <p className="text-sm text-gray-700 mt-2">{addr.address}</p>

            {/* Actions */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => setDefault(addr.id)}
                className="text-sm text-orange-600 hover:underline"
              >
                Set as Default
              </button>

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(addr)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(addr.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">
              {editingId ? "Edit Address" : "Add New Address"}
            </h3>

            <div className="space-y-3">
              <input
                placeholder="Label (Home / Work)"
                className="w-full border rounded-lg px-3 py-2"
                value={formData.label}
                onChange={(e) =>
                  setFormData({ ...formData, label: e.target.value })
                }
              />
              <input
                placeholder="Full Name"
                className="w-full border rounded-lg px-3 py-2"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                placeholder="Phone Number"
                className="w-full border rounded-lg px-3 py-2"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <textarea
                placeholder="Full Address"
                className="w-full border rounded-lg px-3 py-2"
                rows={3}
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedAddresses;