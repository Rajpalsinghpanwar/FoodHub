import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Instamart from "./Pages/Instamart";
import Restaurant from "./Pages/Restaurant";
import SpecificCollection from "./Pages/SpecificCollection";

import AdminDashboard from "./Components/Dashboard/Admin/AdminDashboard";
import DriverDashboard from "./Components/Dashboard/DriverDashboard/DriverDashboard";
import SuperAdminDashboard from "./Components/Dashboard/SuperAdmin/SuperAdminDashboard";
import UserDashboard from "./Components/Dashboard/UserDashboard/UserDashboard";
import SearchFoodandRestaurent from "./Pages/SearchFoodandRestaurent";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/collection" element={<Collection />} />
          <Route path="/Instamart" element={<Instamart />} />
          <Route path="/Restaurant" element={<Restaurant />} />
          <Route path="/collection/:id" element={<SpecificCollection />} />
          <Route path="/search" element={<SearchFoodandRestaurent />} />
          {/* Admin dashboard */}
          <Route path="/admin" element={<AdminDashboard/>} />
           {/* Driver dashboard */}
          <Route path="/driver" element={<DriverDashboard/>} />
           {/*Super Admin dashboard */}
          <Route path="/super-admin" element={<SuperAdminDashboard/>} />
           {/* User dashboard */}
          <Route path="/user" element={<UserDashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
