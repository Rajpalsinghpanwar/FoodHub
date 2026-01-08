import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Bell,
  Star,
  Repeat,
} from "lucide-react";

const initialWishlist = [
  {
    id: 1,
    type: "restaurant",
    name: "Spicy Hub",
    cuisine: "Indian • Chinese",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    offer: "20% OFF",
    frequent: true,
  },
  {
    id: 2,
    type: "dish",
    name: "Paneer Butter Masala",
    restaurant: "Royal Kitchen",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1604908812541-82dbe3a36c20",
    offer: null,
    frequent: true,
  },
  {
    id: 3,
    type: "dish",
    name: "Chicken Biryani",
    restaurant: "Hyderabadi House",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1694024692292-3f46c9e6c8f3",
    offer: "Flat ₹50 OFF",
    frequent: false,
  },
];

export default function FavoritesWishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeFavorite = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Heart className="text-red-500" />
          Favorites & Wishlist
        </h2>
        <span className="text-sm text-gray-500">
          {wishlist.length} items
        </span>
      </div>

      {/* Wishlist Grid */}
      {wishlist.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <Heart size={40} className="mx-auto mb-3" />
          No favorites yet
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover"
                />

                {/* Offer Badge */}
                {item.offer && (
                  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    {item.offer}
                  </span>
                )}

                {/* Remove Favorite */}
                <button
                  onClick={() => removeFavorite(item.id)}
                  className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow hover:bg-red-50"
                >
                  <Heart className="text-red-500" size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-gray-800 line-clamp-1">
                  {item.name}
                </h3>

                {item.type === "restaurant" ? (
                  <>
                    <p className="text-sm text-gray-500">
                      {item.cuisine}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      {item.rating}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-gray-500">
                      {item.restaurant}
                    </p>
                    <p className="font-semibold text-gray-800">
                      ₹{item.price}
                    </p>
                  </>
                )}

                {/* Frequent Order */}
                {item.frequent && (
                  <div className="flex items-center gap-1 text-xs text-blue-600">
                    <Repeat size={14} />
                    Frequently Ordered
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-3">
                  <button className="flex-1 flex items-center justify-center gap-1 bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 rounded-xl">
                    <ShoppingCart size={16} />
                    Reorder
                  </button>

                  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 p-2 rounded-xl">
                    <Bell size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}