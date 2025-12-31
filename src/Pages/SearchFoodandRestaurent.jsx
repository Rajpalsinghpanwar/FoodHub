import React from "react";
import CollectionNavbar from "../Components/Collection/CollectionNavbar";
import { FiSearch } from "react-icons/fi";

 const foodoptions = [
    
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
      },
    
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
      },
    
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png",
      },
    
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
      },
    
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png",
      },
    
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png",
      },
    
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Gulab%20Jamun.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rasmalai.png",
      },
    
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pastry.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav%20Bhaji.png",
      },
    
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png",
      },
    

      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Jalebi.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png",
      },
    
  ];
function SearchFoodandRestaurent() {
  return (
    <div>
      <CollectionNavbar />
      <div className="relative max-w-5xl mx-auto mt-10">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="w-full border rounded-lg px-4 py-3 pr-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
      </div>

      {/* Popular Cuisines */}
      <div className="max-w-5xl mx-auto mt-10 px-8">
        <h2 className="text-lg font-bold mb-6">Popular Cuisines</h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {foodoptions.map((item,index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[80px] cursor-pointer"
            >
              <img
                src={item.Image}
                alt={"item"}
                className="w-20 h-20 rounded-full object-cover shadow-sm"
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchFoodandRestaurent;
