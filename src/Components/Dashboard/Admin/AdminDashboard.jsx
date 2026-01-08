import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
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

function AdminDashboard() {
   
  return (
    <div className='h-screen w-screen flex overflow-hidden '>
     
       <Sidebar data={SIDEBAR_CONFIG['RESTAURANT']}/>
       <div className="h-full w-full flex flex-col">
        <Header/>
        <Outlet/>
       </div>
    </div>
  )
}

export default AdminDashboard