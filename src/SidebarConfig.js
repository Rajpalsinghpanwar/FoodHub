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
        { name: "Profile", icon: User },
        { name: "Saved Addresses", icon: MapPin },
        { name: "Payment Methods", icon: CreditCard }
      ]
    },
    {
      category: "Engagement",
      items: [
        { name: "Ratings & Reviews", icon: MessageSquare },
        { name: "Refer & Earn", icon: Megaphone }
      ]
    },
    {
      category: "Support & Settings",
      items: [
        { name: "Help & Support", icon: HelpCircle },
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
      items: [{ name: "Admin Dashboard", icon: LayoutDashboard }]
    },
    {
      category: "User Management",
      items: [
        { name: "Customers", icon: Users },
        { name: "Restaurant Owners", icon: Store },
        { name: "Delivery Partners", icon: Truck }
      ]
    },
    {
      category: "Restaurant Control",
      items: [
        { name: "Restaurant Approvals", icon: ShieldCheck },
        { name: "Restaurant Listings", icon: Store }
      ]
    },
    {
      category: "Order Management",
      items: [
        { name: "Live Orders", icon: Truck },
        { name: "All Orders", icon: Receipt },
        { name: "Dispute Management", icon: MessageSquare }
      ]
    },
    {
      category: "Support & Security",
      items: [
        { name: "Support Tickets", icon: HelpCircle },
        { name: "Admin Roles & Permissions", icon: ShieldCheck },
        { name: "Logout", icon: LogOut }
      ]
    }
  ]
};