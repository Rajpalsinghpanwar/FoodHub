import React from 'react'
import { FiSearch, FiArrowLeft } from "react-icons/fi";

function InstamartNavbar() {
  return (
    <div className="flex w-[80%] mx-auto items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FiArrowLeft className="text-xl" />
                <h1 className="text-xl font-bold">Fresh Vegetables</h1>
              </div>
              <FiSearch className="text-xl" />
            </div>
  )
}

export default InstamartNavbar