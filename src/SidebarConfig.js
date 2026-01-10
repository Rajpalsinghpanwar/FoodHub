import {
  LayoutDashboard,
  Receipt,
  Heart,
  Tag,
  User,
  MapPin,
  CreditCard,
  MessageSquare,
  HelpCircle,
  LogOut,
  Store,
  Package,
  Layers,
  Megaphone,
  Truck,
  Wallet,
  ShieldCheck,
  Users
} from "lucide-react";

export  const SIDEBAR_CONFIG = {
  CUSTOMER: [
    {
      category: "Core Navigation",
      items: [
        { name: "Dashboard", icon: LayoutDashboard, path: "/user" }
      ]
    },
    {
      category: "Orders",
      items: [
        { name: "My Cart", icon: Package, path: "/user/my-cart" },
        { name: "My Orders", icon: Receipt, path: "/user/my-orders" },
        { name: "Live Tracking", icon: Truck, path: "/user/live-tracking" },
        { name: "Order History", icon: Receipt, path: "/user/userorder-history" }
      ]
    },
    {
      category: "Personalization",
      items: [
        { name: "Favorites & Wishlist", icon: Heart, path:"/user/favorites-wishlist" },
        { name: "Offers & Coupons", icon: Tag, path:"/user/offers-coupons" }
      ]
    },
    {
      category: "Account",
      items: [
        { name: "Profile", icon: User, path:"/user/profile" },
        { name: "Saved Addresses", icon: MapPin, path:"/user/saved-addresses"},
        { name: "Payment Methods", icon: CreditCard, path:"/user/payment-methods" }
      ]
    },
    {
      category: "Engagement",
      items: [
        { name: "Ratings & Reviews", icon: MessageSquare, path:"/user/rating-reviews" },
        { name: "Refer & Earn", icon: Megaphone, path:"/user/refer-earn" }
      ]
    },
    {
      category: "Support & Settings",
      items: [
        { name: "Help & Support", icon: HelpCircle, path:"/user/user-helpsupport" },
        { name: "Logout", icon: LogOut }
      ]
    }
  ],

  RESTAURANT: [
    {
      category: "Overview",
      items: [{ name: "Dashboard", icon: LayoutDashboard, path:"/admin"}]
    },
    {
      category: "Restaurant Management",
      items: [
        { name: "Restaurant Profile", icon: Store, path:"/admin/restaurant-profile" },
        { name: "Verification Status", icon: ShieldCheck, path:"/admin/verification-status"}
      ]
    },
    {
      category: "Menu & Inventory",
      items: [
        { name: "Menu Management", icon: Package, path:"/admin/menu-management"},
        { name: "Inventory Alerts", icon: Layers, path:"/admin/inventory-alerts" },
        { name: "Categories & Add-ons", icon: Layers, path:"/admin/categories-addons" }
      ]
    },
    {
      category: "Orders",
      items: [
        { name: "Incoming Orders", icon: Receipt, path:"/admin/incoming-orders" },
        { name: "Active Orders", icon: Truck, path:"/admin/active-orders" },
        { name: "Order History", icon: Receipt, path:"/admin/order-history"}
      ]
    },
    {
      category: "Marketing",
      items: [
        { name: "Offers & Discounts", icon: Tag, path:"/admin/offers-discounts" }
      ]
    },
    {
      category: "Customer Interaction",
      items: [
        { name: "Customer Reviews", icon: MessageSquare, path:"/admin/customer-reviews" }
      ]
    },
    {
      category: "Account & Support",
      items: [
        { name: "Profile Settings", icon: User, path:"/admin/profile-setting" },
        { name: "Help & Support", icon: HelpCircle, path:"/admin/help-support" },
        { name: "Logout", icon: LogOut, path:"/admin/logout" }
      ]
    }
  ],

  DELIVERY: [
    {
      category: "Main",
      items: [
        { name: "Dashboard", icon: LayoutDashboard, path:"/driver" },
        { name: "Availability Status", icon: Truck, path:"/driver/availability-status" }
      ]
    },
    {
      category: "Deliveries",
      items: [
        { name: "New Requests", icon: Package, path:"/driver/new-requests" },
        { name: "Active Deliveries", icon: Truck, path:"/driver/active-deliveries" },
        { name: "Delivery History", icon: Receipt, path:"/driver/delivery-history" }
      ]
    },
    {
      category: "Earnings",
      items: [
        { name: "Earnings Overview", icon: Wallet , path:"/driver/earnings-overview"},
        { name: "Incentives & Bonuses", icon: Tag, path:"/driver/incentive-bonus" },
        { name: "Payment History", icon: CreditCard, path:"/driver/payment-history" }
      ]
    },
    {
      category: "Account",
      items: [
        { name: "Profile & Documents", icon: User, path:"/driver/profile-documents" },
        { name: "Vehicle Details", icon: Truck, path:"/driver/vehicle-details" }
      ]
    },
    {
      category: "Support",
      items: [
        { name: "Help & Support", icon: HelpCircle, path:"/driver/help-support" },
        { name: "Logout", icon: LogOut, path:"/driver/logout" }
      ]
    }
  ],

  ADMIN: [
    {
      category: "Overview",
      items: [{ name: "Admin Dashboard", icon: LayoutDashboard, path:"/super-admin" }]
    },
    {
      category: "User Management",
      items: [
        { name: "Customers", icon: Users, path:"/super-admin/customers" },
        { name: "Restaurant Owners", icon: Store, path:"/super-admin/restaurant-owners" },
        { name: "Delivery Partners", icon: Truck, path:"/super-admin/delivery-partners" }
      ]
    },
    {
      category: "Restaurant Control",
      items: [
        { name: "Restaurant Approvals", icon: ShieldCheck, path:"/super-admin/restaurant-approvals" },
        { name: "Restaurant Listings", icon: Store, path:"/super-admin/restaurant-listings" }
      ]
    },
    {
      category: "Order Management",
      items: [
        { name: "Live Orders", icon: Truck, path:"/super-admin/live-orders" },
        { name: "All Orders", icon: Receipt, path:"/super-admin/all-orders" },
        { name: "Dispute Management", icon: MessageSquare, path:"/super-admin/dispute-management" }
      ]
    },
    {
      category: "Support & Security",
      items: [
        { name: "Support Tickets", icon: HelpCircle, path:"/super-admin" },
        { name: "Admin Roles & Permissions", icon: ShieldCheck, path:"/super-admin" },
        { name: "Logout", icon: LogOut,  }
      ]
    }
  ]
};