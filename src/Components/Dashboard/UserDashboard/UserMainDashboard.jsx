import React from "react";
import {
  MapPin,
  Clock,
  ShoppingBag,
  Flame,
  Star,
  Repeat,
  Gift,
  Truck,
} from "lucide-react";

/* ------------------ Dummy Data ------------------ */
const featuredRestaurants = [
  {
    id: 1,
    name: "Spice Hub",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600",
  },
  {
    id: 2,
    name: "Burger Town",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
  },
];

const trendingItems = [
  {
    id: 1,
    name: "Cheese Burst Pizza",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1548365328-8b849e6f7b1d?w=600",
  },
  {
    id: 2,
    name: "Chicken Burger",
    price: "₹199",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
  },
];

const recommendations = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    image:
      "https://images.unsplash.com/photo-1604908177522-4290c12e0a4c?w=600",
  },
  {
    id: 2,
    name: "Veg Biryani",
    image:
      "https://images.unsplash.com/photo-1625944525533-473f1a3f1b6d?w=600",
  },
];

/* ------------------ Component ------------------ */
const UserMainDashboard = () => {
  return (
    <div className="h-screen overflow-y-auto  bg-gray-50 p-4 space-y-6">
      {/* Greeting */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-5 rounded-2xl shadow">
        <h2 className="text-xl font-semibold">Hi Rajpal 👋</h2>
        <p className="flex items-center text-sm mt-1 opacity-90">
          <MapPin size={16} className="mr-1" /> Indore, MP
        </p>
      </div>

      {/* Ongoing Order */}
      <div className="bg-white rounded-2xl p-4 shadow flex justify-between items-center">
        <div>
          <h3 className="font-semibold flex items-center gap-2">
            <Truck size={18} className="text-green-500" />
            Order on the way
          </h3>
          <p className="text-sm text-gray-500">
            Expected in <span className="font-medium">15 mins</span>
          </p>
        </div>
        <button className="text-orange-600 font-semibold">
          Track
        </button>
      </div>

      {/* Last Order */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Clock size={18} /> Last Order
        </h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Burger + Fries Combo</p>
            <p className="text-sm text-gray-500">₹249 • 2 items</p>
          </div>
          <button className="flex items-center gap-1 text-sm bg-orange-500 text-white px-3 py-1.5 rounded-lg">
            <Repeat size={16} /> Reorder
          </button>
        </div>
      </div>

      {/* Offers */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-4 shadow flex items-center gap-4">
        <Gift size={28} />
        <div>
          <h3 className="font-semibold">Flat 40% OFF 🎉</h3>
          <p className="text-sm opacity-90">
            Use code <b>FOOD40</b>
          </p>
        </div>
      </div>

      {/* Featured Restaurants */}
      <div>
        <h3 className="font-semibold mb-3">Featured Restaurants</h3>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {featuredRestaurants.map((res) => (
            <div
              key={res.id}
              className="min-w-[200px] bg-white rounded-xl shadow"
            >
              <img
                src={res.image}
                alt={res.name}
                className="h-28 w-full object-cover rounded-t-xl"
              />
              <div className="p-3">
                <p className="font-medium">{res.name}</p>
                <p className="text-sm flex items-center gap-1 text-gray-500">
                  <Star size={14} className="text-yellow-400" />
                  {res.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Items */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Flame size={18} className="text-red-500" />
          Trending Items
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {trendingItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-full object-cover"
              />
              <div className="p-2">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Recommendations */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <ShoppingBag size={18} />
          Recommended for You
        </h3>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="min-w-[180px] bg-white rounded-xl shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-full object-cover rounded-t-xl"
              />
              <div className="p-2">
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserMainDashboard;