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
import MainDashboard from "./Components/Dashboard/Admin/MainDashboard";
import RestaurantProfile from "./Components/Dashboard/Admin/RestaurantProfile";
import MenuManagement from "./Components/Dashboard/Admin/MenuManagement";
import VerificationStatus from "./Components/Dashboard/Admin/VerificationStatus";
import InventoryAlerts from "./Components/Dashboard/Admin/InventoryAlerts";
import CategoriesAddons from "./Components/Dashboard/Admin/CategoriesAddons";
import IncomingOrders from "./Components/Dashboard/Admin/IncomingOrders";
import ActiveOrders from "./Components/Dashboard/Admin/ActiveOrders";
import OrderHistory from "./Components/Dashboard/Admin/OrderHistory";
import OffersDiscounts from "./Components/Dashboard/Admin/OffersDiscounts";
import CustomerReviews from "./Components/Dashboard/Admin/CustomerReviews";
import ProfileSetting from "./Components/Dashboard/Admin/ProfileSetting";
import AdminHelpAndSupport from "./Components/Dashboard/Admin/AdminHelpSupport";
import AdminLogout from "./Components/Dashboard/Admin/AdminLogout";
import Dashboard from "./Components/Dashboard/DriverDashboard/Dashboard";
import AvailabilityStatus from "./Components/Dashboard/DriverDashboard/AvailabilityStatus";
import NewRequests from "./Components/Dashboard/DriverDashboard/NewRequests";
import ActiveDeliveries from "./Components/Dashboard/DriverDashboard/ActiveDeliveries";
import DeliveryHistory from "./Components/Dashboard/DriverDashboard/DeliveryHistory";
import EarningsOverview from "./Components/Dashboard/DriverDashboard/EarningsOverview";
import IncentiveBonus from "./Components/Dashboard/DriverDashboard/IncentiveBonus";
import PaymentHistory from "./Components/Dashboard/DriverDashboard/PaymentHistory";
import ProfileDocuments from "./Components/Dashboard/DriverDashboard/ProfileDocuments";
import VehicleDetails from "./Components/Dashboard/DriverDashboard/VehicleDetails";
import UserMainDashboard from "./Components/Dashboard/UserDashboard/UserMainDashboard";
import MyCart from "./Components/Dashboard/UserDashboard/MyCart";
import MyOrders from "./Components/Dashboard/UserDashboard/MyOrders";
import LiveTracking from "./Components/Dashboard/UserDashboard/LiveTracking";
import UserOrderHistory from "./Components/Dashboard/UserDashboard/UserOrderHistory";
import FavoritesWishlist from "./Components/Dashboard/UserDashboard/FavoritesWishlist";
import OffersCoupons from "./Components/Dashboard/UserDashboard/OffersCoupons";
import Profile from "./Components/Dashboard/UserDashboard/Profile";
import SavedAddresses from "./Components/Dashboard/UserDashboard/SavedAddresses";
import PaymentMethods from "./Components/Dashboard/UserDashboard/PaymentMethods";
import RatingReviews from "./Components/Dashboard/UserDashboard/RatingReviews";
import ReferEarn from "./Components/Dashboard/UserDashboard/ReferEarn";
import UserHelpSupport from "./Components/Dashboard/UserDashboard/UserHelpSupport";
import SuperAdminMainDashboard from "./Components/Dashboard/SuperAdmin/SuperAdminMainDashboard";
import Customers from "./Components/Dashboard/SuperAdmin/Customers";
import RestaurantOwners from "./Components/Dashboard/SuperAdmin/RestaurantOwners";
import DeliveryPartners from "./Components/Dashboard/SuperAdmin/DeliveryPartners";
import RestaurantApprovals from "./Components/Dashboard/SuperAdmin/RestaurantApprovals";
import RestaurantListings from "./Components/Dashboard/SuperAdmin/RestaurantListings";
import LiveOrders from "./Components/Dashboard/SuperAdmin/LiveOrders";
import AllOrders from "./Components/Dashboard/SuperAdmin/AllOrders";
import DisputeManagement from "./Components/Dashboard/SuperAdmin/DisputeManagement";

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
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<MainDashboard />} />
            <Route path="restaurant-profile" element={<RestaurantProfile />} />
            <Route
              path="verification-status"
              element={<VerificationStatus />}
            />
            <Route path="menu-management" element={<MenuManagement />} />
            <Route path="inventory-alerts" element={<InventoryAlerts />} />
            <Route path="categories-addons" element={<CategoriesAddons />} />
            <Route path="incoming-orders" element={<IncomingOrders />} />
            <Route path="active-orders" element={<ActiveOrders />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="offers-discounts" element={<OffersDiscounts />} />
            <Route path="customer-reviews" element={<CustomerReviews />} />
            <Route path="profile-setting" element={<ProfileSetting />} />
            <Route path="help-support" element={<AdminHelpAndSupport />} />
            <Route path="logout" element={<AdminLogout />} />
          </Route>
          {/* Driver dashboard */}
          <Route path="/driver" element={<DriverDashboard />}>
            <Route index element={<Dashboard />} />
            <Route
              path="availability-status"
              element={<AvailabilityStatus />}
            />
            <Route path="new-requests" element={<NewRequests />} />
            <Route path="active-deliveries" element={<ActiveDeliveries />} />
            <Route path="delivery-history" element={<DeliveryHistory />} />
            <Route path="earnings-overview" element={<EarningsOverview />} />
            <Route path="incentive-bonus" element={<IncentiveBonus />} />
            <Route path="payment-history" element={<PaymentHistory />} />
            <Route path="profile-documents" element={<ProfileDocuments />} />
            <Route path="vehicle-details" element={<VehicleDetails />} />
          </Route>
          {/*Super Admin dashboard */}
          <Route path="/super-admin" element={<SuperAdminDashboard />}>
            <Route index element={<SuperAdminMainDashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="restaurant-owners" element={<RestaurantOwners />} />
            <Route path="delivery-partners" element={<DeliveryPartners />} />
            <Route
              path="restaurant-approvals"
              element={<RestaurantApprovals />}
            />
            <Route
              path="restaurant-listings"
              element={<RestaurantListings />}
            />
            <Route path="live-orders" element={<LiveOrders />} />
            <Route path="all-orders" element={<AllOrders />} />
            <Route path="dispute-management" element={<DisputeManagement />} />
          </Route>
          {/* User dashboard */}
          <Route path="/user" element={<UserDashboard />}>
            <Route index element={<UserMainDashboard />} />
            <Route path="my-cart" element={<MyCart />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="live-tracking" element={<LiveTracking />} />
            <Route path="userorder-history" element={<UserOrderHistory />} />
            <Route path="favorites-wishlist" element={<FavoritesWishlist />} />
            <Route path="offers-coupons" element={<OffersCoupons />} />
            <Route path="profile" element={<Profile />} />
            <Route path="saved-addresses" element={<SavedAddresses />} />
            <Route path="payment-methods" element={<PaymentMethods />} />
            <Route path="rating-reviews" element={<RatingReviews />} />
            <Route path="refer-earn" element={<ReferEarn />} />
            <Route path="user-helpsupport" element={<UserHelpSupport />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
