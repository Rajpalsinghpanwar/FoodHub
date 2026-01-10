import React from "react";
import { Search, Bell, Settings, HelpCircle, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-6 shrink-0">
      {/* Left: Search */}
      <div className="flex items-center w-full max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF5200]" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
          />
        </div>
      </div>

      {/* Right: Icons & Profile */}
      <div className="flex items-center gap-4 ml-6">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <HelpCircle className="text-black" size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <Bell className="text-black" size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 bg-[#FF5200] rounded-full"></span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Settings className="text-black" size={20} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-full">
          <img
            src="https://i.pinimg.com/736x/d1/81/e4/d181e44cf0a7d5f9190bc96939da4164.jpg"
            alt="profile"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-sm font-medium text-black hidden sm:block">James</span>
          <ChevronDown size={16} className="text-black" />
        </div>
      </div>
    </header>
  );
}
