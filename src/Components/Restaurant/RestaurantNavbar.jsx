
import React from "react";
import { IoLocationOutline, IoChevronDown } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

function RestaurantNavbar() {
  return (
     <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
              alt="Swiggy"
              className="h-8"
            />
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-orange-500">
            <IoLocationOutline className="text-lg text-orange-500" />
            <span>Setup your precise location</span>
            <IoChevronDown />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3">
            <input
              type="text"
              placeholder="Search for restaurant and food"
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <CiSearch className="text-xl text-gray-500" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <FaUserCircle className="text-3xl text-gray-700 cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default RestaurantNavbar