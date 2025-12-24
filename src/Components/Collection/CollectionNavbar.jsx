import React from "react";
import { FiSearch } from "react-icons/fi";

import { MdHelpOutline } from "react-icons/md";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const CollectionNavbar = () => {
  return (
    <nav className="w-full h-20 bg-white shadow-sm flex items-center justify-between px-10">
      
      {/* Left Section */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center rounded-lg font-bold text-xl">
            S
          </div>
        </div>

        {/* Other Dropdown */}
        <div className="flex items-center gap-1 cursor-pointer text-gray-800 font-medium border-b-2 border-black">
          <span>Other</span>
          <RiArrowDropDownLine size={22} />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-10 text-gray-700 font-medium">
        
        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
          <span className="border p-1 rounded">
            <svg width="14" height="14" fill="none">
              <rect x="2" y="2" width="10" height="10" stroke="currentColor" />
            </svg>
          </span>
          Swiggy Corporate
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
          <FiSearch size={18} />
          Search
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
          {/* <BiOffer size={18} /> */}
          Offers
          <span className="text-orange-500 text-xs font-bold">NEW</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
          <MdHelpOutline size={18} />
          Help
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
          <AiOutlineUser size={18} />
          Sign In
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
          <AiOutlineShoppingCart size={18} />
          Cart
        </div>
      </div>
    </nav>
  );
};

export default CollectionNavbar;
