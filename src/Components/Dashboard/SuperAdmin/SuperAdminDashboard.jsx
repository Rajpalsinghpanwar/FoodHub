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
import { Outlet } from 'react-router';

function SuperAdminDashboard() {
  
  return (
    <div className='h-screen w-screen flex overflow-hidden'>
           <Sidebar data={SIDEBAR_CONFIG['ADMIN']}/>
           <div className="h-full w-full flex flex-col ">
            <Header/>
            <Outlet/>
           </div>
        </div>
  )
}

export default SuperAdminDashboard