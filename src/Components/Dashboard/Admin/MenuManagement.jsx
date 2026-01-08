import React, { useState } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Soup,
  UtensilsCrossed,
  IceCream,
  Coffee,
} from "lucide-react";

/* Category config with icons */
const categories = [
  { name: "Starters", icon: Soup },
  { name: "Main Course", icon: UtensilsCrossed },
  { name: "Desserts", icon: IceCream },
  { name: "Beverages", icon: Coffee },
];

/* ===== MENU DATA (5 ITEMS EACH) ===== */
const initialMenu = {
  Starters: [
    {
      id: 1,
      name: "Paneer Tikka",
      description: "Grilled cottage cheese with spices",
      price: 220,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1604908177225-5eafaa0d76e1",
    },
    {
      id: 2,
      name: "Chicken Lollipop",
      description: "Crispy fried chicken wings",
      price: 260,
      veg: false,
      available: true,
      image:
        "https://images.unsplash.com/photo-1628294896516-344152572ee0",
    },
    {
      id: 3,
      name: "Veg Spring Rolls",
      description: "Stuffed crispy rolls",
      price: 180,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },
    {
      id: 4,
      name: "Fish Fingers",
      description: "Golden fried fish strips",
      price: 290,
      veg: false,
      available: false,
      image:
        "https://images.unsplash.com/photo-1617191518000-4c04d5b6c2a6",
    },
    {
      id: 5,
      name: "Cheese Garlic Bread",
      description: "Toasted bread with cheese",
      price: 160,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5",
    },
  ],

  "Main Course": [
    {
      id: 6,
      name: "Butter Chicken",
      description: "Creamy tomato chicken curry",
      price: 380,
      veg: false,
      available: true,
      image:
        "https://images.unsplash.com/photo-1604908811698-746fbb4a06a1",
    },
    {
      id: 7,
      name: "Paneer Butter Masala",
      description: "Rich paneer gravy",
      price: 320,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    },
    {
      id: 8,
      name: "Veg Biryani",
      description: "Aromatic vegetable rice",
      price: 260,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
    {
      id: 9,
      name: "Chicken Biryani",
      description: "Slow cooked chicken rice",
      price: 340,
      veg: false,
      available: false,
      image:
        "https://images.unsplash.com/photo-1628294897333-00cc0b8fd31f",
    },
    {
      id: 10,
      name: "Dal Tadka",
      description: "Yellow lentils tempered with ghee",
      price: 210,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1601050690644-88c3c9f3c6a4",
    },
  ],

  Desserts: [
    {
      id: 11,
      name: "Gulab Jamun",
      description: "Soft milk dumplings",
      price: 120,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1612197527762-00c1a1b5b0c1",
    },
    {
      id: 12,
      name: "Chocolate Brownie",
      description: "Warm brownie with sauce",
      price: 180,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    },
    {
      id: 13,
      name: "Ice Cream Sundae",
      description: "Vanilla ice cream delight",
      price: 150,
      veg: true,
      available: false,
      image:
        "https://images.unsplash.com/photo-1590080877777-1c4d4b4fa3a3",
    },
    {
      id: 14,
      name: "Rasgulla",
      description: "Soft cottage cheese balls",
      price: 110,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1631452180803-4e3c80dce3b4",
    },
    {
      id: 15,
      name: "Fruit Custard",
      description: "Fresh fruits & custard",
      price: 140,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1604909053073-cf8a0c2f6515",
    },
  ],

  Beverages: [
    {
      id: 16,
      name: "Cold Coffee",
      description: "Chilled coffee with milk",
      price: 130,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1595434091143-b375ced5fe5c",
    },
    {
      id: 17,
      name: "Fresh Lime Soda",
      description: "Refreshing lime drink",
      price: 90,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    },
    {
      id: 18,
      name: "Mango Shake",
      description: "Seasonal mango shake",
      price: 150,
      veg: true,
      available: false,
      image:
        "https://images.unsplash.com/photo-1626078436898-40e78b7b7d69",
    },
    {
      id: 19,
      name: "Masala Chai",
      description: "Indian spiced tea",
      price: 60,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1597318181112-43b0c3a86c55",
    },
    {
      id: 20,
      name: "Soft Drink",
      description: "Chilled carbonated drink",
      price: 70,
      veg: true,
      available: true,
      image:
        "https://images.unsplash.com/photo-1580910051074-7d45c8a16f9f",
    },
  ],
};

export default function MenuManagement() {
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [menuData, setMenuData] = useState(initialMenu);

  const toggleAvailability = (id) => {
    setMenuData((prev) => ({
      ...prev,
      [activeCategory]: prev[activeCategory].map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      ),
    }));
  };

  return (
    <div className="h-screen bg-gray-100 p-6 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Menu Management</h1>
        <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg">
          <Plus size={18} /> Add New Food Item
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-3 mb-4 overflow-x-auto scrollbar-hide">
        {categories.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActiveCategory(name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
              activeCategory === name
                ? "bg-orange-600 text-white"
                : "bg-white"
            }`}
          >
            <Icon size={16} />
            {name}
          </button>
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[activeCategory].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg"
            >
              <img
                src={item.image}
                className="h-40 w-full object-cover rounded-t-xl"
                alt={item.name}
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span
                    className={`w-3 h-3 rounded-full ${
                      item.veg ? "bg-green-600" : "bg-red-600"
                    }`}
                  />
                </div>

                <p className="text-sm text-gray-500">
                  {item.description}
                </p>

                <p className="font-semibold mt-2">₹{item.price}</p>

                <div className="flex justify-between items-center mt-3">
                  <span
                    className={`text-sm ${
                      item.available
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    {item.available ? "Available" : "Unavailable"}
                  </span>

                  <button
                    onClick={() => toggleAvailability(item.id)}
                    className={`w-10 h-5 flex rounded-full p-1 ${
                      item.available
                        ? "bg-green-500 justify-end"
                        : "bg-gray-300 justify-start"
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </button>
                </div>

                <div className="flex justify-end gap-3 mt-4">
                  <Edit className="text-blue-600 cursor-pointer" />
                  <Trash2 className="text-red-600 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}