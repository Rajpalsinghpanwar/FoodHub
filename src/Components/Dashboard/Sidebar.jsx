import React, { useState } from "react";
import {
  FaThLarge,
  FaShoppingBag,
  FaStore,
  FaWallet,
  FaSignOutAlt,
  FaBars,
  FaChevronLeft,
} from "react-icons/fa";

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // const menuItems = [
  //   { id: 1, name: "Dashboard", icon: <FaThLarge /> },
  //   { id: 2, name: "Orders", icon: <FaShoppingBag /> },
  //   { id: 3, name: "Restaurants", icon: <FaStore /> },
  //   { id: 4, name: "Finance", icon: <FaWallet /> },
  //   { id: 5, name: "Logout", icon: <FaSignOutAlt /> },
  // ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center bg-[#FF5200] text-white p-4">
        <button onClick={() => setMobileOpen(true)}>
          <FaBars size={22} />
        </button>
        <h1 className="ml-4 text-lg font-semibold">Food Admin</h1>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen bg-[#FF5200] text-white
        transition-all duration-300 z-50
        ${collapsed ? "w-20" : "w-64"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          {!collapsed && <h1 className="text-xl font-bold">Food Admin</h1>}
          <button
            className="hidden md:block"
            onClick={() => setCollapsed(!collapsed)}
          >
            <FaChevronLeft
              className={`transition-transform ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Close on mobile */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <ul className="px-2 space-y-2">
          {props.data.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer
              hover:bg-white hover:text-[#FF5200] transition-all"
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ul>

        {/* Bottom Button */}
        {!collapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <button
              className="w-full bg-white text-[#FF5200] py-3 rounded-xl font-semibold
              hover:bg-gray-100 transition-all"
            >
              Start New Order
            </button>
          </div>
        )}
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
