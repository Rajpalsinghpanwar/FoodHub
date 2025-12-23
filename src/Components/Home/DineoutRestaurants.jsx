import React from 'react'
import { NavLink } from 'react-router'
import { IoIosStar } from "react-icons/io";

function Dineout({item}) {
  return (
    
<NavLink to="/dineout" className="min-w-[35%] h-1/2 flex flex-col justify-between items-center gap-1 border border-gray-200 rounded-2xl">
      <div className="w-full h-1/2 relative "> 
          <img src={item.image} alt="restaurant" className="w-full h-full rounded-xl opacity-90"/>
        
        <div className="w-full h-1/5 absolute bottom-0 p-3 flex justify-between items-center">
          <span className="text-white text-xl font-bold">{item.name}</span>
          <span className="flex justify-between items-center gap-1">
            <span className="rounded-full text-white bg-green-800 p-0.5">
              <IoIosStar />
            </span>
            <span className="text-white font-medium">{item.rating}</span>
          </span>
        </div>
      </div>
      <div className="w-full h-2/5 text-gray-600 p-2 flex flex-col justify-around items-start gap-2">
        <div className="w-full h-1/5 flex justify-between items-center ">
          <span>{item.type}</span>
          <span>${item.price} for two</span>
        </div>
        <div className="w-full h-1/5 flex justify-between items-center ">
          <span>{item.location}</span>
          <span>{item.distance} km</span>
        </div>
        <div className="w-[40%] h-6 flex justify-center items-center gap-2 bg-pink-200 rounded-xl p-1.5" >
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png" alt="booktable" className="h-[90%]" />
            <span className="text-gray-600 text-[14px]">Table booking</span>
        </div>
        <div className="w-full h-10 flex justify-between items-center bg-green-700 text-white text-[16px] font-medium rounded-xl">
             <div className="h-full w-3/4 flex justify-around items-center">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png" alt="percentage" className="w-1/9 h-full"/>
                <span >{item.discount}</span>
             </div>
             <div className="h-full w-1/4 flex justify-center items-center ">
                +{item.extraDiscount} more
             </div>
        </div>
        <div className="w-full h-10 flex justify-between items-center p-1.5 bg-green-200 text-green-600 rounded-xl" >
            Up to 10% off with bank offers
        </div>
      </div>
    </NavLink>
        
    
  )
}

export default Dineout