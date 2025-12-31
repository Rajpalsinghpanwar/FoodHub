import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar({ data }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-white border-r transition-all duration-300
      ${collapsed ? "w-20" : "w-64"} flex flex-col`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <h1 className="text-xl font-bold text-[#FF5200]">FoodHub</h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 space-y-6 overflow-y-auto">
       
        {data.map((section) => (
          <div key={section.category}>
            {!collapsed && (
              <p className="text-xs text-gray-400 mb-2 uppercase">
                {section.category}
              </p>
            )}
            {section.items.map((item) => (
              <SidebarItem
                key={item.name}
                icon={item.icon}
                name={item.name}
                collapsed={collapsed}
              />
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function SidebarItem({ icon: Icon, name, collapsed }) {
  return (
    <button
      className="flex items-center w-full gap-3 px-3 py-2 rounded-lg mb-1
      text-gray-600 hover:bg-gray-300 transition"
    >
      <Icon size={20} />
      {!collapsed && <span className="text-sm">{name}</span>}
    </button>
  );
}