import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import InstamartNavbar from "../Components/Instamart/InstamartNavbar";
import { FiFilter, FiChevronDown } from "react-icons/fi";

const categories = [
  {
    id: 1,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/NI_CATALOG/IMAGES/CIW/2025/5/14/1eb83ef6-0039-4c50-b733-e5844d3a874e_02aa33bd-66a9-4d7e-b90b-f3889cd4bebd",
    name: "Fresh Vegetables",
  },
  {
    id: 2,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/NI_CATALOG/IMAGES/CIW/2025/5/14/90edc829-294e-4964-b4b6-441567e171e6_f2a65d2b-7864-42dc-9e89-7c258971e2e9",
    name: "Leafy and Seasonings",
  },
  {
    id: 3,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/NI_CATALOG/IMAGES/CIW/2025/5/14/021af0e5-0edd-4f99-b45d-7e2d9e45cda4_4baa8d1b-4523-41b8-9b50-579018abef3d",
    name: "Exotic Vegetables",
  },
  {
    id: 4,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/740c89a8c673942e12340747d6947993",
    name: "Festive Essentials",
  },
  {
    id: 5,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96/NI_CATALOG/IMAGES/CIW/2025/3/19/609e1e73-ef28-4d72-bdec-139e414d40e1_3a95431a-6c61-4b42-95b2-965640f7600b",
    name: "Flowers & Plants",
  },
];

const products = [
  {
    id: 1,
    name: "Indian Tomato (Tamatar)",
    desc: "Juicy, tangy & ideal for all Indian curries",
    qty: "500 g",
    price: 39,
    oldPrice: 49,
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_544,w_504/oc5f9hp0qmf5mk3cqsbg",
  },
  {
    id: 2,
    name: "Hybrid Tomato (Tamatar)",
    desc: "Fresh, firm & great in gravies or sauces",
    qty: "500 g",
    price: 42,
    oldPrice: 53,
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_544,w_504/NI_CATALOG/IMAGES/ciw/2025/11/20/07ad27a4-82dc-4903-a3f2-8350d359b876_WTUNZSYDUT_MN_20112025.jpg",
  },
  {
    id: 3,
    name: "Indian Tomato (Tamatar)",
    deliveryTime: "12 MINS",
    description: "Juicy, tangy & ideal for all Indian curries",
    quantity: "500 g",
    price: 39,
    originalPrice: 49,
    discount: "20% OFF",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_544,w_504/NI_CATALOG/IMAGES/ciw/2025/12/18/ba114a37-d0d3-4d45-9b22-ba6509fc963e_TMK0UFJWXM_MN_18122025.png",
    isVeg: true,
  },
  {
    id: 4,
    name: "Hybrid Tomato (Tamatar)",
    deliveryTime: "12 MINS",
    description: "Fresh, firm & great in gravies or sauces",
    quantity: "500 g",
    price: 42,
    originalPrice: 53,
    discount: "20% OFF",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_544,w_504/NI_CATALOG/IMAGES/ciw/2025/12/18/96833bab-c95a-468d-b40a-f6104f516e9b_TOXY8MIG4N_MN_18122025.png",
    isVeg: true,
  },
];

const FreshVegetables = () => {
  const [activeId, setActiveId] = useState(1);
  const filters = ["Exotics", "Gourd", "Beans", "Capsicum"];
  return (
    <div>
      <InstamartNavbar />
      <div className="w-[80%] mx-auto h-screen bg-gray-200 flex">
        {/* Sidebar */}
        <div className="w-45 h-full overflow-auto bg-white border-r no-scrollbar">
          <div className="p-4 font-semibold text-lg">Fresh Vegetables</div>

          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`px-4 py-3 cursor-pointer text-sm ${
                activeId === cat.id
                  ? "text-pink-600 font-semibold  bg-pink-50"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <img src={cat.img} alt="" />
              <span> {cat.name}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Filters */}
          <div className="flex gap-3 mb-6">
            <div className="w-full bg-gray-50 p-3">
              <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
                {/* Filter Icon Button */}
                <button className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 bg-white">
                  <FiFilter className="text-gray-600" />
                </button>

                {/* Category Chips */}
                {filters.map((item, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                  >
                    {item}
                  </button>
                ))}

                {/* Type Dropdown */}
                <button className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 whitespace-nowrap">
                  Type <FiChevronDown className="text-gray-500" />
                </button>
                {/* Sort By Dropdown */}
                <button className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 whitespace-nowrap">
                  Sort By <FiChevronDown className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 gap-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-sm relative"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-36 w-full object-contain"
                />

                <h3 className="mt-2 font-semibold text-sm">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>

                <p className="text-sm mt-1">{item.qty}</p>

                <div className="flex items-center gap-2 mt-1">
                  <span className="font-semibold">₹{item.price}</span>
                  <span className="text-xs line-through text-gray-400">
                    ₹{item.oldPrice}
                  </span>
                  <span className="text-xs text-green-600 font-semibold">
                    20% OFF
                  </span>
                </div>

                {/* Add Button */}
                <button className="absolute bottom-4 right-4 border border-blue-500 text-blue-500 p-2 rounded-lg hover:bg-blue-50">
                  <FiPlus />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshVegetables;
