import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import FoodOptions from "../Components/Home/FoodOptions";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Groceries from "../Components/Home/Groceries";
import DineoutRestaurants from "../Components/Home/DineoutRestaurants";

import Footer from "../Components/Home/Footer";

import AuthLayout from "../Components/Auth/AuthLayout";
import { useLocation } from "react-router";
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }),[location];

  const [signInclicked, setSignInClicked] = useState(false);
  const indianCities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh",
    "Amritsar",
    "Patna",
  ];

  const Dineout = [
    {
      id: 1,
      name: "House of Candy",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/8/18/1d3b7151-be92-4f7a-b38b-fdc43e1ef281_20240818T103122936.jpg",
      rating: 3.8,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 500,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      id: 2,
      name: "Dosa Partner",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1685098373/0cd63a1236e00ae2082121283d3a6231.jpg",
      rating: 3.7,
      type: "South Indian",
      location: "Chhoti Gwaltoli,Indore",
      price: 700,
      distance: 3.1,
      discount: "flat 10% off on pre booking",
      extraDiscount: 2,
    },
    {
      id: 3,
      name: "Saffron",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/10/3/b05b91e4-73f6-4cfc-ad32-83582dbba78b_image99c4be1fb26d742b4847a9c84c98fa1eb.JPG",
      rating: 3.9,
      type: "North Indian,Mughlai",
      location: "Chhoti Gwaltoli,Indore",
      price: 500,
      distance: 4.7,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      id: 4,
      name: "House of Candy",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/8/18/1d3b7151-be92-4f7a-b38b-fdc43e1ef281_20240818T103122936.jpg",
      rating: 4.6,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 500,
      distance: 4.9,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      id: 5,
      name: "The Rocky's Cafe",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1672742133/ca035a5e57597bc8b7a32e2c869d7a5d.jpg",
      rating: 4.7,
      type: "Beverages,Fast Food",
      location: "Chhoti Gwaltoli,Indore",
      price: 900,
      distance: 3.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 2,
    },
    {
      id: 6,
      name: "Jain Shree Sweets and Gajak",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/4/12/38423c58-c607-4a9c-b3a8-fe570ac84244_image27ff89e42544542e3a0e747b03e638fca.JPG",
      rating: 4.5,
      type: "Fast Food,Mangolian",
      location: "Chhoti Gwaltoli,Indore",
      price: 700,
      distance: 2.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 2,
    },
    {
      id: 7,
      name: "Deuce",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/12/14/175586f7-b090-4679-8f13-5bac1daa30fe_image2af5e5e78b45f4ee29f4e4facffe408ed.JPG",
      rating: 3.4,
      type: "Multi Cusion",
      location: "Chhoti Gwaltoli,Indore",
      price: 900,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      id: 8,
      name: "Nutritenic",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1669278113/5ddc4b402995b00f4d04169fccb5fa0f.jpg",
      rating: 3.8,
      type: "Continental",
      location: "Chhoti Gwaltoli,Indore",
      price: 500,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      id: 9,
      name: "Tass Greens",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1675346369/2ac337db78b8aeef19f0d1b5ccaf3f43.webp",
      rating: 4.2,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 600,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      id: 10,
      name: "Chill-By Sarovar Portico",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1685098720/f07850de926446898c0a136911fa9957.jpg",
      rating: 3.6,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 800,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      id: 11,
      name: "Abhinav Cafe",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1693891567/f542aa304c84c161aa57eeac1f023c55.jpg",
      rating: 3.7,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 700,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
    {
      id: 12,
      name: "Destiny Cafe",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1707668018/6932b3c7d02ca64b9dda40cac8674c55.jpg",
      rating: 4.8,
      type: "Dessert",
      location: "Chhoti Gwaltoli,Indore",
      price: 500,
      distance: 4.5,
      discount: "flat 10% off on pre booking",
      extraDiscount: 3,
    },
  ];
  const groceryItems = [
    {
      id: 1,
      name: "Fresh Vegetables",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/43e3c412-4ca9-4894-82ba-24b69da80aa6_06c0d2a9-804c-4bf1-8725-7ebd234e144a",
    },
    {
      id: 2,
      name: "Fresh Fruits",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/a1493d81-f21e-415f-9875-f78383590fc2_9f3f0f68-4fbe-40f6-8f5d-5472a03469bd",
    },
    {
      id: 3,
      name: "Dairy, Bread and Eggs",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/6dea6676-ce07-45e6-b60c-a099c01c5462_6d33297a-5828-48ff-aa2a-c052ae97669e",
    },
    {
      id: 4,
      name: "Rice, Atta and Dals",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/097900ca-5d2d-4bb0-8e54-aede1e58dfd8_eab3796c-ac17-48fd-bfc7-6356c6f89783",
    },
    {
      id: 5,
      name: "Masalas and Dry Fruits",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/64714677-e6b6-41c1-b533-6644d43e55f7_76ef86af-0483-41a5-8387-37901bf4ca6a",
    },
    {
      id: 6,
      name: "Oils and Ghee",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/8e48ee13-3b51-49ea-b765-5cf3e7a97c04_695caa8a-c2f6-4a1a-9672-53213fea21aa",
    },
    {
      id: 7,
      name: "Munchies",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/8e48ee13-3b51-49ea-b765-5cf3e7a97c04_695caa8a-c2f6-4a1a-9672-53213fea21aa",
    },
    {
      id: 8,
      name: "Sweet Tooth",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/83a9b71b-1db7-4cbe-a9f7-ead650d26326_3afbe8c8-f5c8-4dd7-8357-f5711f80646b",
    },
    {
      id: 9,
      name: "Cold Drinks and Juices",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/37d399b1-52d2-47ef-bdd8-8951e51819fc_0361a93d-e864-49be-a57d-46c958eb7b56",
    },
    {
      id: 10,
      name: "Biscuits and Cakes",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/76a7104c-0f11-4182-aa51-0d48efc2be7f_aae098f9-aaff-4504-a222-bf13595d58cd",
    },
    {
      id: 11,
      name: "Instant and Frozen Food",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/76a7104c-0f11-4182-aa51-0d48efc2be7f_aae098f9-aaff-4504-a222-bf13595d58cd",
    },
    {
      id: 12,
      name: "Meat and Seafood",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/25be4b2d-a9de-495e-a9a4-9a6d6a3d13c0_5f571281-eef0-4820-9982-d8bdd9af91c6",
    },
    {
      id: 13,
      name: "Cereals and Breakfast",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/012beae1-c31a-4360-9b32-173080b64652_aa07a04e-5f2e-4c00-86f6-297344906f01",
    },
    {
      id: 14,
      name: "Sauces and Spreads",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/e2f96940-2657-4a4b-a5e1-0c3413ba25cb_8b977351-a415-442a-bb9c-320e1642f740",
    },
    {
      id: 15,
      name: "Tea, Coffee and More",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/5fc3d15a-26b0-41e0-93ab-39ada0f553c2_82e0ff9f-558c-45dd-af3e-fdc16d0aa471",
    },
    {
      id: 16,
      name: "Cleaning Essentials",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/73a47bc4-c684-447f-9908-22da3ecd3ba2_c9948a61-3dca-4e29-82b4-31178d38746b",
    },
    {
      id: 17,
      name: "Pharma and Hygiene",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/fc74f557-a203-4dba-8955-82d6c608e91e_7d2481f0-8614-400c-b25c-554a655c14c7",
    },
    {
      id: 18,
      name: "Bath, Body and Hair",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/4342c814-6ff9-4bbe-a360-95200ad602a0_1905dc17-a04d-4a9e-9a4e-adde9b27f321",
    },
    {
      id: 19,
      name: "Paan Corner",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/3/25/1eae2df9-95a5-40e5-a2c0-92bb4893637a_5e1e6c72-dde5-4a12-8bdf-c7cbc4b0644b",
    },
    {
      id: 20,
      name: "Home and Kitchen",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/657a922d-067a-4e0b-b967-b3e0c7906fa9_485311db-2f22-4193-a05d-963f18a89150",
    },
    {
      id: 21,
      name: "Office and Electricals",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/52a66c89-6516-489f-96ac-b15286900648_ebbfd2d1-9b36-4ce3-b08c-7378f1ca6d7d",
    },
  ];
  const foodoptions = [
    [
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
      },
    ],
    [
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
      },
    ],
    [
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png",
      },
    ],
    [
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
      },
    ],
    [
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png",
      },
    ],
    [
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png",
      },
    ],
    [
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Gulab%20Jamun.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rasmalai.png",
      },
    ],
    [
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pastry.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav%20Bhaji.png",
      },
    ],
    [
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png",
      },
    ],
    [
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Jalebi.png",
      },
      {
        Image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png",
      },
    ],
  ];
  return (
    <div className="relative">
      <Navbar setSignInClicked={setSignInClicked} />
      {signInclicked && <AuthLayout setSignInClicked={setSignInClicked} />}

      <Hero />

      <div className="flex w-[75%] h-[50%] flex-col mx-auto mt-30 ">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">
            Order our best food options
          </span>
          <span className="flex items-center gap-3 ">
            <button className="cursor-pointer">
              <FaArrowLeft className=" h-7 w-7 p-2 rounded-full bg-gray-400  " />
            </button>
            <button className="cursor-pointer">
              <FaArrowRight className="h-7 w-7 p-2 rounded-full bg-gray-400" />
            </button>
          </span>
        </div>
        <div className="flex overflow-x-scroll scroll-smooth mt-10">
          {foodoptions.map((item, index) => {
            return <FoodOptions key={index} item={item} />;
          })}
        </div>
      </div>
      <div className="flex w-[75%] h-[50%]  flex-col mx-auto mt-30 ">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">
            Shop groceries on Instamart
          </span>
          <span className="flex items-center gap-3 ">
            <button className="cursor-pointer">
              <FaArrowLeft className=" h-7 w-7 p-2 rounded-full bg-gray-400  " />
            </button>
            <button className="cursor-pointer">
              <FaArrowRight className="h-7 w-7 p-2 rounded-full bg-gray-400" />
            </button>
          </span>
        </div>
        <div className="flex overflow-x-scroll scroll-smooth mt-10 overflow-y-hidden">
          {groceryItems.map((item, index) => {
            return <Groceries key={index} item={item} />;
          })}
        </div>
      </div>
      <div className="flex w-[75%] h-[50%]  flex-col mx-auto mt-30 ">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">
            Discover best restaurants on Dineout
          </span>
          <span className="flex items-center gap-3 ">
            <button className="cursor-pointer">
              <FaArrowLeft className=" h-7 w-7 p-2 rounded-full bg-gray-400  " />
            </button>
            <button className="cursor-pointer">
              <FaArrowRight className="h-7 w-7 p-2 rounded-full bg-gray-400" />
            </button>
          </span>
        </div>
        <div className="flex overflow-x-scroll scroll-smooth mt-10 overflow-y-hidden gap-4">
          {Dineout.map((item, index) => {
            return <DineoutRestaurants key={index} item={item} />;
          })}
        </div>
      </div>
      <div id="app" className="h-64 w-full  mt-20">
        <img
          className="h-64 w-full"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt=""
        />
      </div>
      <div className="h-full w-[70%] flex flex-col gap-3 mx-auto mt-15 ">
        <span className="text-2xl font-bold ">Cities with food delivery</span>

        <div className="  flex justify-between flex-wrap items-center gap-2 font-bold ">
          {indianCities.map((city) => {
            return (
              <span className="border rounded-xl p-3 px-5 text-center">
                {" "}
                Order food online in <br /> {city}
              </span>
            );
          })}
        </div>
      </div>
      <div className="h-full w-[70%] flex flex-col gap-3 mx-auto mt-15 ">
        <span className="text-2xl font-bold ">
          Cities with grocery delivery
        </span>

        <div className="  flex justify-between flex-wrap items-center gap-2 font-bold ">
          {indianCities.map((city) => {
            return (
              <span className="border rounded-xl p-3 px-5 text-center">
                {" "}
                Order grocery online in <br /> {city}
              </span>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
