import React from "react";
import RestaurantNavbar from "../Components/Restaurant/RestaurantNavbar";
import { FaStar } from "react-icons/fa";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

function Restaurant() {
  return (
    <div>
      <RestaurantNavbar />
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-3xl font-bold mt-6">DEUCE</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b mt-4">
          <button className="pb-3 border-b-2 border-orange-500 text-orange-500 font-semibold">
            Dineout
          </button>
          <button className="pb-3 text-gray-500 hover:text-black">
            Photos
          </button>
          <button className="pb-3 text-gray-500 hover:text-black">Menu</button>
        </div>

        {/* Banner */}
        <div className="relative mt-6 rounded-2xl overflow-hidden h-[320px]">
          <img
            src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/12/14/175586f7-b090-4679-8f13-5bac1daa30fe_image2af5e5e78b45f4ee29f4e4facffe408ed.JPG"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />

          {/* Info Card */}
          <div className="absolute left-6 bottom-6 bg-white rounded-2xl shadow-lg p-13 w-[480px]">
            {/* Rating */}
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="flex items-center gap-1 text-green-600">
                <FaStar />
                5.0
              </span>
              <span className="text-gray-500">· 23 in Google</span>
              <span className="text-black font-bold">· ₹1200 for two</span>
            </div>

            {/* Cuisine */}
            <p className="mt-2 font-medium">Multi Cuisine, World Cuisine</p>

            {/* Location */}
            <p className="mt-1 text-sm text-gray-600">
              Location 6th Floor, Sda Corporate, 166, Mr 10 Road, Nipania
            </p>

            {/* Open Status */}
            <p className="mt-2 text-sm">
              <span className="text-green-600 font-semibold">Open now</span>
              <span className="text-gray-500"> · OPEN TILL 11:30PM</span>
              <IoChevronDown className="inline ml-1" />
            </p>

            <hr className="my-4" />

            {/* Actions */}
            <div className="flex justify-between text-orange-500 font-medium text-sm">
              <button className="flex items-center gap-2 hover:text-orange-600">
                <MdOutlineTableRestaurant />
                Book Table
              </button>
              <span className="text-gray-300">|</span>
              <button className="flex items-center gap-2 hover:text-orange-600">
                <IoCallOutline />
                Call
              </button>
              <span className="text-gray-300">|</span>
              <button className="flex items-center gap-2 hover:text-orange-600">
                <IoLocationOutline />
                Direction
              </button>
            </div>
          </div>

          {/* Show Images Button */}
          <button className="absolute right-6 bottom-6 bg-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-100">
            Show all images
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-10">
          {/* Offers Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Offers</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-gray-100">
                <IoArrowBack />
              </button>
              <button className="p-2 rounded-full bg-gray-100">
                <IoArrowForward />
              </button>
            </div>
          </div>

          {/* Main Offer Card */}
          <div className="w-[320px] border border-gray-300 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-5">
              <h3 className="text-lg font-bold">Flat 10% Off</h3>
              <p className="text-sm text-gray-600 mt-1">on total bill</p>
              <p className="font-semibold mt-1">@₹10/guest</p>
            </div>

            <div className="bg-red-50 p-5 text-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">Pre-book offer</span>
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                  ONE EXCLUSIVE
                </span>
              </div>
              <p className="text-gray-600">
                Limited slots, buy offer and book your table
              </p>
            </div>
          </div>

          {/* Additional Offers */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Additional Offers</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-gray-100">
                  <IoArrowBack />
                </button>
                <button className="p-2 rounded-full bg-gray-100">
                  <IoArrowForward />
                </button>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto">
              {/* Card 1 */}
              <div className="min-w-[280px] border border-gray-300 rounded-xl p-4 flex gap-4 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  alt="Visa"
                  className="h-8"
                />
                <div>
                  <p className="font-semibold">Flat 10% Cashback</p>
                  <p className="text-sm text-gray-600">
                    Flat 10% Cashback | Above ₹100
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="min-w-[280px] border border-gray-300 rounded-xl p-4 flex gap-4 items-center">
                <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-bold">
                  H
                </div>
                <div>
                  <p className="font-semibold">10% off upto ₹500</p>
                  <p className="text-sm text-gray-600">
                    Use HDFCINFINIA | Above ₹3500
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="min-w-[280px] border border-gray-300 rounded-xl p-4 flex gap-4 items-center">
                <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-bold">
                  H
                </div>
                <div>
                  <p className="font-semibold">10% off</p>
                  <p className="text-sm text-gray-600">
                    Use HDFC | Above ₹2000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT QR SECTION */}
        <div className="border border-gray-300 rounded-2xl p-6 flex flex-col items-center text-center space-y-4">
          <h3 className="font-semibold text-lg">
            Explore more ways to dine with
          </h3>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
            alt="Dineout"
            className="h-10"
          />

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Dineout"
            alt="QR"
            className="h-40"
          />

          <p className="text-sm text-gray-600">
            Scan the QR code to download the app
          </p>

          <div className="flex gap-3">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
