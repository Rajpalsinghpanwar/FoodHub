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
import {SIDEBAR_CONFIG} from "../../../SidebarConfig"

function SuperAdminDashboard() {
  
  return (
    <div className='h-screen w-screen flex '>
           <Sidebar data={SIDEBAR_CONFIG['ADMIN']}/>
           <div className="h-full w-full ">
            <Header/>
           </div>
        </div>
  )
}

export default SuperAdminDashboard