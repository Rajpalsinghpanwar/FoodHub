import React, { useState } from "react";
import {
  Tag,
  Wallet,
  Clock,
  CheckCircle,
  Gift,
  Percent,
} from "lucide-react";

const couponsData = [
  {
    id: 1,
    code: "SAVE50",
    description: "Get ₹50 off on orders above ₹299",
    expiry: "2 days left",
    applied: false,
    discount: "₹50",
  },
  {
    id: 2,
    code: "FOOD20",
    description: "20% off up to ₹100",
    expiry: "5 days left",
    applied: true,
    discount: "20%",
  },
];

const personalizedOffers = [
  {
    id: 1,
    title: "Late Night Cravings 🍕",
    desc: "Flat 25% off on orders after 10 PM",
  },
  {
    id: 2,
    title: "Frequent User Bonus 🎉",
    desc: "Extra ₹75 off on your next order",
  },
];

const walletOffers = [
  {
    id: 1,
    title: "Wallet Cashback",
    desc: "Get 10% cashback using Wallet",
  },
  {
    id: 2,
    title: "UPI Offer",
    desc: "Flat ₹30 cashback on UPI payments",
  },
];

const OffersCoupons = () => {
  const [coupons, setCoupons] = useState(couponsData);

  const applyCoupon = (id) => {
    setCoupons((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, applied: true } : { ...c, applied: false }
      )
    );
  };

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Gift className="text-orange-500" /> Offers & Coupons
      </h2>

      {/* Coupons Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className={`p-4 rounded-xl border bg-white shadow hover:shadow-lg transition ${
              coupon.applied ? "border-green-500" : "border-gray-200"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center gap-2 font-semibold text-lg">
                <Tag className="text-orange-500" /> {coupon.code}
              </span>
              {coupon.applied && (
                <span className="flex items-center gap-1 text-green-600 text-sm">
                  <CheckCircle size={16} /> Applied
                </span>
              )}
            </div>

            <p className="text-gray-600 text-sm mb-3">
              {coupon.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1 text-xs text-red-500">
                <Clock size={14} /> {coupon.expiry}
              </span>

              {!coupon.applied && (
                <button
                  onClick={() => applyCoupon(coupon.id)}
                  className="px-4 py-1.5 text-sm rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
                >
                  Apply
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Personalized Discounts */}
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Percent className="text-purple-500" /> Personalized Discounts
      </h3>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {personalizedOffers.map((offer) => (
          <div
            key={offer.id}
            className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow"
          >
            <h4 className="font-semibold text-lg">{offer.title}</h4>
            <p className="text-sm opacity-90 mt-1">{offer.desc}</p>
          </div>
        ))}
      </div>

      {/* Cashback & Wallet Offers */}
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Wallet className="text-green-500" /> Cashback & Wallet Offers
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {walletOffers.map((wallet) => (
          <div
            key={wallet.id}
            className="p-4 rounded-xl bg-white border border-gray-200 shadow hover:shadow-md transition"
          >
            <h4 className="font-medium text-gray-800">
              {wallet.title}
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              {wallet.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersCoupons;