import React from "react";
import { MapPin, Clock, Phone, Edit, Image as ImageIcon } from "lucide-react";

export default function RestaurantProfile() {
  const restaurant = {
    id: 1,
    name: "Spicy Bites",
    logo: "https://i.pinimg.com/736x/0c/ed/b0/0cedb031dd636fd1a11948f97fc3d89a.jpg",
    banner:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200",
    cuisines: ["North Indian", "Chinese"],
    address: "21, MG Road, Indore, MP",
    geo: "22.7196° N, 75.8577° E",
    hours: "10:00 AM – 11:30 PM",
    phone: "+91 98765 43210",
    fssai: "FSSAI-1234567890",
    deliveryRadius: "8 km",
    costForTwo: "₹600",
  };

  return (
    <div className="h-full overflow-y-auto p-6">
      <RestaurantProfileCard restaurant={restaurant} />
    </div>
  );
}

function RestaurantProfileCard({ restaurant }) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Banner */}
      <div className="relative">
        <img
          src={restaurant.banner}
          alt="banner"
          className="h-48 w-full object-cover"
        />

        <div className="absolute -bottom-8 left-6 flex items-center gap-4">
          <img
            src={restaurant.logo}
            alt="logo"
            className="h-20 w-20 rounded-xl border-4 border-white object-cover shadow"
          />
          <div className="bg-orange-50 rounded-2xl p-3">
            <h2 className="text-2xl font-bold text-black">
              {restaurant.name}
            </h2>
            <p className="text-sm text-gray-600">
              {restaurant.cuisines.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-14 px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="text-orange-500" size={18} />
            <div>
              <p className="text-sm font-semibold">Address</p>
              <p className="text-sm text-gray-600">{restaurant.address}</p>
              <p className="text-xs text-gray-400">{restaurant.geo}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="text-orange-500" size={18} />
            <div>
              <p className="text-sm font-semibold">Operating Hours</p>
              <p className="text-sm text-gray-600">{restaurant.hours}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-orange-500" size={18} />
            <div>
              <p className="text-sm font-semibold">Contact</p>
              <p className="text-sm text-gray-600">{restaurant.phone}</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-4">
          <InfoCard label="FSSAI / License" value={restaurant.fssai} />
          <InfoCard label="Delivery Radius" value={restaurant.deliveryRadius} />
          <InfoCard label="Cost for Two" value={restaurant.costForTwo} />
          <InfoCard
            label="Cuisine Types"
            value={restaurant.cuisines.length}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="border-t px-6 py-4 flex flex-wrap gap-3 justify-end bg-gray-50">
        <ActionButton icon={<Edit size={16} />} text="Edit Profile" />
        <ActionButton icon={<ImageIcon size={16} />} text="Update Images" />
        <ActionButton icon={<Clock size={16} />} text="Update Hours" />
      </div>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="bg-orange-50 rounded-xl p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

function ActionButton({ icon, text }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-800 transition">
      {icon}
      {text}
    </button>
  );
}