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

function AdminDashboard() {
   
  return (
    <div className='h-screen w-screen flex '>
     
       <Sidebar data={SIDEBAR_CONFIG['RESTAURANT']}/>
       <div className="h-full w-full ">
        <Header/>
       </div>
    </div>
  )
}

export default AdminDashboard