import React from "react";
import { NavLink } from "react-router";
import { MdArrowOutward } from "react-icons/md";

function Navbar() {
  return (
    <nav className="w-full bg-[#FF5200] shadow-md">
      <div className=" mx-auto px-6 py-4 flex items-center justify-around">
        <div className="flex justify-between items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
            alt="Swiggy Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-white">FoodHub</h1>
        </div>

        <div className="w-1/2 flex justify-between items-center gap-8 text-white font-bold text-[18px] ">

        <NavLink className=" " to="/Corporate">Swiggy Corporate </NavLink>
         <NavLink to="/partner">Partner with Us

          </NavLink>
         <NavLink to="/app" className="border border-gray-300 px-3 py-3 flex items-center rounded-xl gap-2 ">  Get the App <MdArrowOutward />
          </NavLink>
          
           <NavLink to="/signin"  className="bg-black px-3 py-3 flex items-center rounded-xl ">Sign In</NavLink>
          
          

          
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
