import React, { useState } from "react";
import { AlertTriangle, XCircle, Package, ToggleLeft, ToggleRight } from "lucide-react";

const initialInventory = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    stock: 2,
    status: "low",
    available: true,
  },
  {
    id: 2,
    name: "Veg Biryani",
    stock: 0,
    status: "out",
    available: false,
  },
  {
    id: 3,
    name: "Chicken Tikka",
    stock: 5,
    status: "low",
    available: true,
  },
  {
    id: 4,
    name: "Gulab Jamun",
    stock: 0,
    status: "out",
    available: false,
  },
];

export default function InventoryAlerts() {
  const [items, setItems] = useState(initialInventory);

  const updateStock = (id, value) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              stock: value,
              status: value === 0 ? "out" : value <= 5 ? "low" : "ok",
              available: value === 0 ? false : item.available,
            }
          : item
      )
    );
  };

  const toggleAvailability = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Package className="text-orange-600" />
        <h2 className="text-2xl font-bold">Inventory Alerts</h2>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3">
          <XCircle className="text-red-600" />
          <div>
            <p className="font-semibold text-red-700">Out of Stock Items</p>
            <p className="text-sm text-red-600">
              These items are automatically disabled from ordering.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3">
          <AlertTriangle className="text-yellow-600" />
          <div>
            <p className="font-semibold text-yellow-700">Low Stock Warning</p>
            <p className="text-sm text-yellow-600">
              Refill stock soon to avoid auto-disable.
            </p>
          </div>
        </div>
      </div>

      {/* Inventory List */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Item</th>
              <th className="p-3 text-center">Stock</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Availability</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3 font-medium">{item.name}</td>

                {/* Update Stock */}
                <td className="p-3 text-center">
                  <input
                    type="number"
                    min="0"
                    value={item.stock}
                    onChange={(e) =>
                      updateStock(item.id, Number(e.target.value))
                    }
                    className="w-20 px-2 py-1 border rounded-md text-center"
                  />
                </td>

                {/* Status */}
                <td className="p-3 text-center">
                  {item.status === "out" && (
                    <span className="px-3 py-1 rounded-full text-xs bg-red-100 text-red-600">
                      Out of Stock
                    </span>
                  )}
                  {item.status === "low" && (
                    <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                      Low Stock
                    </span>
                  )}
                  {item.status === "ok" && (
                    <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-600">
                      In Stock
                    </span>
                  )}
                </td>

                {/* Availability Toggle */}
                <td className="p-3 text-center">
                  <button
                    onClick={() => toggleAvailability(item.id)}
                    className="inline-flex items-center gap-2"
                  >
                    {item.available ? (
                      <>
                        <ToggleRight className="text-green-600" />
                        <span className="text-green-600 text-xs">
                          Available
                        </span>
                      </>
                    ) : (
                      <>
                        <ToggleLeft className="text-gray-400" />
                        <span className="text-gray-500 text-xs">
                          Unavailable
                        </span>
                      </>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Auto Disable Info */}
      <div className="text-sm text-gray-500 text-center">
        ⚙️ Items with <b>0 stock</b> are automatically marked as{" "}
        <b>Unavailable</b> to prevent new orders.
      </div>
    </div>
  );
}