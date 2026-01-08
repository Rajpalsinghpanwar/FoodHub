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

function UserDashboard() {
 
  return (
    <div className='h-screen w-screen flex overflow-hidden '>
           <Sidebar data={SIDEBAR_CONFIG['CUSTOMER']}/>
           <div className="h-full w-full ">
            <Header/>
            <Outlet/>
           </div>
        </div>
  )
}

export default UserDashboard