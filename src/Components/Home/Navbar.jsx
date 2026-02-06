import React from "react";
import { NavLink } from "react-router";
import { MdArrowOutward } from "react-icons/md";
import { SiPandas } from "react-icons/si";

function Navbar({setIsOpen}) {
  return (
    <nav className="w-full bg-[#FF5200] shadow-md">
      <div className=" mx-auto px-6 py-4 flex items-center justify-around">
        <div className="flex justify-between items-center gap-3">
          <img
            src="https://i.pinimg.com/1200x/77/7f/ce/777fcedd52f716089e33baf6fc3ff1ac.jpg"
            alt="Foodhub Logo"
            className="w-10 h-10 object-contain "
          />
          <h1 className="text-2xl font-bold text-white">FoodHub</h1>
        </div>

        <div className="w-1/2 flex justify-between items-center gap-8 text-white font-bold text-[18px] ">
          <NavLink className=" " to="/Corporate">
            Swiggy Corporate{" "}
          </NavLink>
          <NavLink to="/partner">Partner with Us</NavLink>
          <NavLink
            to="/#app"
            className="border border-gray-300 px-3 py-3 flex items-center rounded-xl gap-2 "
          >
            {" "}
            Get the App <MdArrowOutward />
          </NavLink>

          <span onClick={()=>setIsOpen(true)} className="bg-black px-3 py-3 flex items-center rounded-xl cursor-pointer ">
            Sign In
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
