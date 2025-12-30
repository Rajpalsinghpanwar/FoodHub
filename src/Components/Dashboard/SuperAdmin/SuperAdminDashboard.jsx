import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  FaThLarge,
  FaShoppingBag,
  FaStore,
  FaWallet,
  FaSignOutAlt,
  FaBars,
  FaChevronLeft,
} from "react-icons/fa";

function SuperAdminDashboard() {
   const menuItems = [
      { id: 1, name: "Dashboard-superadmin", icon: <FaThLarge /> },
      { id: 2, name: "Orders", icon: <FaShoppingBag /> },
      { id: 3, name: "Restaurants", icon: <FaStore /> },
      { id: 4, name: "Finance", icon: <FaWallet /> },
      { id: 5, name: "Logout", icon: <FaSignOutAlt /> },
    ];
  return (
    <div className='h-screen w-screen flex '>
           <Sidebar data={menuItems}/>
           <div className="h-full w-full ">
            <Header/>
           </div>
        </div>
  )
}

export default SuperAdminDashboard