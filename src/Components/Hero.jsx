import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router";
import Service from "./Service";
function Hero() {
  const servicelist = [
    {
      serviceType: "FOOD DELIVERY",
      from: "RESTAURANTS",
      discount: "UPTO 60% OFF",
      image:
        "https://i.pinimg.com/736x/a5/98/03/a59803393359513bce67edd15fb5c59a.jpg",
    },
    {
      serviceType: "INSTAMART",
      from: "INSTANT GROCERY",
      discount: "UPTO 60% OFF",
      image:
        "https://i.pinimg.com/1200x/4a/b5/75/4ab5756f3000d3d0a7cb43b0b25f2ef0.jpg",
    },
    {
      serviceType: "DINEOUT",
      from: "EAT OUT & SAVE MORE",
      discount: "UPTO 50% OFF",
      image:
        "https://i.pinimg.com/1200x/db/86/cf/db86cfd21a8d315a18b341febf282250.jpg",
    },
  ];
  return (
    <div className="h-full w-[full] bg-[#FF5200] flex flex-col items-center justify-between relative  mx-auto">
      <img className="w-[14%] h-3/5 absolute top-15 left-0 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
       <img className="w-[14%] h-3/5 absolute top-15 right-0 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
    <div className=" h-full w-[95%] mx-auto flex flex-col items-center justify-center  ">

      <span className="text-5xl font-bold text-center mt-14 text-white  ">
        Order food & groceries. Discover <br /> best restaurants. Swiggy it!
      </span>
      <div className=" w-full flex justify-center font-bold items-center mt-10 gap-4 ">
        <div className="flex justify-between items-center bg-white p-3.5 rounded-xl gap-3">
          <IoLocationOutline className="text-orange-600" />
          <input
            className=""
            type="text"
            placeholder="Enter your delivery location"
          />
          <RiArrowDropDownLine className="text-3xl" />
        </div>
        <NavLink
          to="/search"
          className=" w-2/5 flex justify-between  items-center bg-white p-4  rounded-xl "
        >
          <input
            className="w-4/5"
            type="text"
            placeholder=" Search for restaurant, item or more "
          />
          <CiSearch />
        </NavLink>
      </div>
      <div className="flex w-[80%] h-[30%] justify-around items-center mt-15 ">
        
        {servicelist.map((item, index) => {
          
          return <Service key={index} item={item} />;
        })}
      </div>
      
    </div>
     
    </div>
   
  );
}

export default Hero;
