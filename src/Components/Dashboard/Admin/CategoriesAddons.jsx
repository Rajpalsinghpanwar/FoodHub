import React, { useState } from "react";
import {
  Plus,
  Edit,
  Layers,
  CheckCircle,
  XCircle,
  Link2,
} from "lucide-react";

/* Dummy Data */
const initialCategories = ["Starters", "Main Course", "Desserts", "Beverages"];

const initialAddons = [
  { id: 1, name: "Extra Cheese", price: 40, active: true },
  { id: 2, name: "Spicy Sauce", price: 20, active: true },
  { id: 3, name: "Olives Topping", price: 35, active: false },
];

const menuItems = ["Pizza", "Burger", "Pasta", "Sandwich"];

export default function CategoriesAddons() {
  const [categories, setCategories] = useState(initialCategories);
  const [addons, setAddons] = useState(initialAddons);
  const [newCategory, setNewCategory] = useState("");
  const [newAddon, setNewAddon] = useState({ name: "", price: "" });
  const [linkedAddons, setLinkedAddons] = useState({});

  const addCategory = () => {
    if (!newCategory.trim()) return;
    setCategories([...categories, newCategory]);
    setNewCategory("");
  };

  const addAddon = () => {
    if (!newAddon.name || !newAddon.price) return;
    setAddons([...addons, { id: Date.now(), ...newAddon, active: true }]);
    setNewAddon({ name: "", price: "" });
  };

  const toggleAddon = (id) => {
    setAddons((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, active: !a.active } : a
      )
    );
  };

  const toggleLinkAddon = (item, addon) => {
    setLinkedAddons((prev) => {
      const current = prev[item] || [];
      return {
        ...prev,
        [item]: current.includes(addon)
          ? current.filter((a) => a !== addon)
          : [...current, addon],
      };
    });
  };

  return (
    <div className="w-full p-6 space-y-8 bg-gray-50 min-h-screen overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Layers className="text-[#FF5200]" />
        <h1 className="text-2xl font-bold">Categories & Add-ons</h1>
      </div>

      {/* Categories + Add-ons */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Categories */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-lg mb-4">Menu Categories</h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((cat, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#FF5200]/10 text-[#FF5200] rounded-full text-sm flex items-center gap-2"
              >
                {cat}
                <Edit size={14} className="cursor-pointer opacity-70" />
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Add new category"
              className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5200]"
            />
            <button
              onClick={addCategory}
              className="bg-[#FF5200] text-white px-4 rounded-lg flex items-center gap-1"
            >
              <Plus size={16} /> Add
            </button>
          </div>
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-lg mb-4">Add-ons List</h2>

          <div className="space-y-3">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className="border rounded-xl px-4 py-3 flex items-center justify-between"
              >
                <div>
                  <p className="font-medium">{addon.name}</p>
                  <p className="text-xs text-gray-500">₹{addon.price}</p>
                </div>

                <button onClick={() => toggleAddon(addon.id)}>
                  {addon.active ? (
                    <CheckCircle className="text-[#FF5200]" />
                  ) : (
                    <XCircle className="text-gray-400" />
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-6">
            <input
              placeholder="Add-on name"
              value={newAddon.name}
              onChange={(e) =>
                setNewAddon({ ...newAddon, name: e.target.value })
              }
              className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5200]"
            />
            <input
              type="number"
              placeholder="₹ Price"
              value={newAddon.price}
              onChange={(e) =>
                setNewAddon({ ...newAddon, price: e.target.value })
              }
              className="w-28 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5200]"
            />
            <button
              onClick={addAddon}
              className="bg-[#FF5200] text-white px-4 rounded-lg flex items-center gap-1"
            >
              <Plus size={16} /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Link Add-ons */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Link2 size={18} className="text-[#FF5200]" />
          Link Add-ons to Menu Items
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <div key={item} className="border rounded-xl p-4">
              <p className="font-medium mb-3">{item}</p>

              <div className="flex flex-wrap gap-2">
                {addons
                  .filter((a) => a.active)
                  .map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleLinkAddon(item, addon.name)}
                      className={`px-3 py-1 rounded-full text-xs border transition ${
                        linkedAddons[item]?.includes(addon.name)
                          ? "bg-[#FF5200] text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {addon.name}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}