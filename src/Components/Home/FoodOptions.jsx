import React from "react";
import { NavLink } from "react-router";

function FoodOptions({item}) {
 
  
  
  return (
    <div className="min-w-43 h-[full]  flex flex-col justify-between    ">
      <NavLink className="h-custom w-custom   " to="/collection">
        <img className="h-40 w-40" src={item[0].Image} alt="" />
      </NavLink>
      <NavLink className="h-custom w-custom  " to="/collection">
        <img className="h-40 w-40" src={item[1].Image} alt="" />
      </NavLink>
    </div>
  );
}

export default FoodOptions;
