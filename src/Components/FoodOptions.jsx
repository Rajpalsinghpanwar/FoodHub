import React from "react";
import { NavLink } from "react-router";

function FoodOptions(props) {
  const { image } = props.item;
  return (
    <div className="w-[full] h-[full] bg-gray-500 flex flex-col justify-center  ">
      <NavLink className="h-custom w-custom  " to="/collections">
        <img className="h-50 w-50" src={image} alt="" />
      </NavLink>
      <NavLink className="h-custom w-custom  " to="/collections">
        <img className="h-50 w-50" src={image} alt="" />
      </NavLink>
    </div>
  );
}

export default FoodOptions;
