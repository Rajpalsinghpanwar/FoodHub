import React from "react";
import { NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa";
function Service(props) {
  const { serviceType, from, discount, image } = props.item;

  return (
    <div className="h-[80%] w-[30%] bg-white rounded-3xl flex flex-col p-2 ">
      <div
        className=" h-1/2 w-full  flex flex-col gap-2 justify-center   "
        to="/restaurants"
      >
        <span className="text-[#444446] font-bold text-3xl">
          
          {serviceType}
        </span>
        <span className="text-[18px] font-bold text-[#8F8F91]  ">{from}</span>
        <span className=" px-1 w-1/2  bg-[#FDD0B8] text-orange-600 font-bold rounded-2xl ">
          {discount}
        </span>
      </div>
      <NavLink
        to="/restaurants"
        className=" w-full h-1/2 flex justify-between items-center  "
      >
        <FaArrowRight className="rounded-full bg-orange-600 text-white text-4xl p-2" />
        <img className="h-40 w-35 " src={image} alt="" />
      </NavLink>

      

    </div>
    
   
  );
}

export default Service;
