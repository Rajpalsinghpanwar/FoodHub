import React from "react";
import CollectionNavbar from "../Components/Collection/CollectionNavbar";
import {
  Star,
  Clock,
  MapPin,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  Percent,
} from "lucide-react";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

function SpecificCollection() {
  const items = [
    {
      id: 1,
      title: "Chicken Tikka Ultimate Cheese Pizza",
      price: 454,
      img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
      type: "nonveg",
    },
    {
      id: 2,
      title: "Tandoori Paneer Ultimate Cheese Pizza",
      price: 394,
      img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      type: "veg",
    },
    {
      id: 3,
      title: "Triple Chicken Feast Ultimate Cheese Pizza",
      price: 484,
      img: "https://images.unsplash.com/photo-1548365328-8b849e6f7c8c",
      type: "nonveg",
    },
  ];

  function DealCard({ title, subtitle, iconColor }) {
    return (
      <div className="min-w-[260px] border border-gray-200 rounded-xl p-4 flex items-center gap-4">
        <div
          className={`h-12 w-12 rounded-full flex items-center justify-center text-white ${iconColor}`}
        >
          <Percent size={20} />
        </div>
        <div>
          <p className="font-bold text-gray-900">{title}</p>
          <p className="text-xs text-gray-500 uppercase">{subtitle}</p>
        </div>
      </div>
    );
  }

  const sliderRef = useRef(null);

  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };
  return (
    <div className="h-screen w-screen">
      <CollectionNavbar />
      <div className="w-[60%] bg-white px-6 py-4 mx-auto mt-1">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 mb-3">
          Home / Indore / <span className="text-gray-700">Pizza Hut</span>
        </p>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pizza Hut</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-200 mb-6">
          <button className="pb-3 text-black font-semibold border-b-2 border-orange-600">
            Order Online
          </button>
          <button className="pb-3  text-black font-semibold hover:text-gray-800">
            Dineout
          </button>
        </div>

        {/* Restaurant Info Card */}
        <div className="rounded-2xl border border-gray-200 shadow-sm p-5 mb-10">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-1 font-bold">
              <span className="rounded-full p-1  bg-green-600 ">
                {" "}
                <Star size={15} className="text-white  " />
              </span>
              4.1 <span className="text-black font-bold">(2.4K+ ratings)</span>
            </div>

            <span className="font-bold text-black">₹350 for two </span>
          </div>
          <span className="text-orange-600 underline font-bold ">Pizzas</span>

          <div className="mt-4 flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={16} className="text-gray-400" />
              <span className="font-medium text-black">Outlet</span>
              <span className="font-medium">Kalani Nagar</span>
              <ChevronDown size={16} className="text-orange-600" />
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Clock size={16} className="text-gray-400" />
              <span className="text-black font-medium">20–25 mins</span>
            </div>
          </div>
        </div>

        {/* Deals Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Deals for you</h2>
          <div className="flex gap-2">
            <button className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <ArrowLeft size={16} />
            </button>
            <button className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Deals Cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 text-xl font-bold">
          <DealCard
            title="Flat 60% Off"
            subtitle="NO CODE REQUIRED"
            iconColor="bg-orange-500"
          />
          <DealCard
            title="Items At ₹59"
            subtitle="ON SELECT ITEMS"
            iconColor="bg-purple-500"
          />
          <DealCard
            title="Special Offers"
            subtitle="LIMITED TIME"
            iconColor="bg-orange-400"
          />
        </div>
        <div className="text-center mt-10">
        <p className="text-sm tracking-widest text-gray-500">MENU</p>
      </div>
         {/* SEARCH */}
      <div className="relative max-w-3xl mx-auto mt-5">
        <input
          type="text"
          placeholder="Search for dishes"
          className="w-full rounded-xl bg-gray-100 px-4 py-3 pr-10 focus:outline-none text-center  font-bold"
        />
        <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>

      {/* FILTERS */}
      <div className="flex gap-3 mt-10">
        <button className="flex items-center gap-2 border rounded-full px-4 py-1 text-sm">
          <span className="h-3 w-3 rounded-sm bg-green-600"></span> Veg
        </button>
        <button className="flex items-center gap-2 border rounded-full px-4 py-1 text-sm">
          <span className="h-3 w-3 rounded-sm bg-red-600"></span> Non-Veg
        </button>
        <button className="border rounded-full px-4 py-1 text-sm font-medium">
          Bestseller
        </button>
      </div>
      <hr className="mt-8 text-gray-300" />

      {/* TOP PICKS */}
      <div className="flex items-center justify-between mt-10">
        <h2 className="text-[25px] font-bold">Top Picks</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[260px] h-[260px] rounded-2xl overflow-hidden relative"
          >
            <img src={item.img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-between">
              <div>
                <span
                  className={`inline-block mb-2 h-4 w-4 rounded-sm ${
                    item.type === "veg" ? "bg-green-600" : "bg-red-600"
                  }`}
                ></span>
                <h3 className="text-white font-semibold text-sm leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-white font-semibold">₹ {item.price}</p>
                <button className="bg-white text-green-600 font-semibold px-6 py-1 rounded-lg">
                  ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

        {/* Floating Menu Button */}
        <button className="fixed bottom-6 right-70 bg-black text-white rounded-full py-4 px-1 font-semibold shadow-lg">
          MENU
        </button>
      
      </div>
      

     
    </div>
  );
}
export default SpecificCollection;
