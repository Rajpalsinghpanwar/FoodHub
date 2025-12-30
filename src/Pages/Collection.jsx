import React from 'react'
import CollectionNavbar from '../Components/Collection/CollectionNavbar';
import { AdjustmentsHorizontalIcon,ChevronDownIcon } from '@heroicons/react/16/solid';
import { NavLink } from 'react-router';




function Collection() {
  const restaurants = [
  {
    id:1,
    name: "Domino's Pizza",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/8a43bc35-7b99-4ae9-adf7-8a20211ace84_79502.JPG",
    rating: "4.1",
    time: "20–25 mins",
    offer: "ITEMS AT ₹59",
    cuisine: "Pizzas, Italian, Pastas, Desserts",
    location: "Village Sirpur",
  },
  {
    id:2,
    name: "Pizza Hut",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/b6c255ec-5775-41ec-a884-5cea991d9c38_581971.JPG",
    rating: "4.1",
    time: "20–25 mins",
    offer: "ITEMS AT ₹59",
    cuisine: "Pizzas",
    location: "Kakani Nagar",
  },
  {
    id:3,
    name: "Olio - The Wood Fired Pizzeria",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/12/19/80c5a011-ef9d-4aa6-9795-49c105c19a8c_1035602.JPG",
    rating: "4.3",
    time: "35–40 mins",
    offer: "ITEMS AT ₹119",
    cuisine: "Pizzas, Pastas, Fast Food",
    location: "Madhumilan Square",
  },
  {
    id:4,
    name: "Crazy Coffee",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/4/aa187ec9-ab07-40e2-b2e2-0232fff1ecd0_5cc3f7d2-0198-47a2-8262-deaf7074556c.jpg",
    rating: "4.2",
    time: "25–30 mins",
    offer: "",
    cuisine: "Beverages, Pizzas, Fast Food",
    location: "Sudama Nagar",
  },
  {
    id: 5,
    name: "Oven Story Pizza",
    image:
      "https://images.unsplash.com/photo-1601924582975-7d4a1e5c45b8",
    rating: "4.7",
    time: "25–30 mins",
    offer: "ITEMS AT ₹99",
    cuisine: "Pizzas, Pastas, Italian, Desserts",
    location: "Sudama Nagar",
  },
  {
    id: 6,
    name: "Pizza Point",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
    rating: "4.1",
    time: "25–30 mins",
    offer: "",
    cuisine: "Pizzas",
    location: "Sarafa",
  },
  {
    id: 7,
    name: "99 Square Pizza",
    image:
      "https://images.unsplash.com/photo-1548365328-9bdbec4c04b4",
    rating: "4.6",
    time: "40–50 mins",
    offer: "ITEMS AT ₹99",
    cuisine: "Pizzas, Italian, Beverages, Desserts",
    location: "Sudama Nagar",
  },
  {
    id: 8,
    name: "La Pino'z Pizza",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
    rating: "4.2",
    time: "20–25 mins",
    offer: "ITEMS AT ₹49",
    cuisine: "Pizzas, Pastas, Italian, Desserts",
    location: "Airport Road",
  },
];
  return (
    <div className='h-screen w-screen'>
    <CollectionNavbar/>
     <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold">Pizza</h1>
      <p className="text-black mt-1 font-medium">
        Cheesilicious pizzas to make every day extraordinary.
      </p>

      {/* Filters */}
      <div className="flex gap-3 mt-4">
        <button className=" flex items-center border border-gray-400 rounded-full px-4 py-2 text-sm hover:bg-gray-100">
          Filter
          <AdjustmentsHorizontalIcon className='w-4 h-4' />
        </button>
        <button className=" flex items-center border  border-gray-400 rounded-full px-4 py-2 text-sm hover:bg-gray-100">
          Sort By
          <ChevronDownIcon className='w-4 h-4' />
        </button>
        <button className="border  border-gray-400 rounded-full px-4 py-2 text-sm hover:bg-gray-100">
          10 Mins Delivery
        </button>
      </div>
      </div>
      <div className='mx-auto px-13 '>

       <h2 className="text-xl font-bold mt-4 ">
        {restaurants.length} Restaurants to explore
      </h2>
      </div>
        <div className="  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 mx-auto w-[93%] ">
        {restaurants.map((item) => (
          <NavLink to={`/collection/${item.id}`}
            key={item.id}
            className="rounded-xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer  "
          >
            {/* Image */}
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover rounded-2xl"
              />
              {item.offer && (
                <div className="absolute bottom-2 left-2  text-white text-sm font-bold px-3 py-1 rounded">
                  {item.offer}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="mt-3">
              <h3 className="font-bold text-lg">{item.name}</h3>

              <div className="flex items-center gap-2 text-sm mt-1">
                <span className="bg-green-600 text-white px-2 py-0.5 rounded">
                  ★ {item.rating}
                </span>
                <span className="font-medium">{item.time}</span>
              </div>

              <p className="text-gray-600 text-sm mt-1 line-clamp-1">
                {item.cuisine}
              </p>
              <p className="text-gray-500 text-sm">{item.location}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Collection