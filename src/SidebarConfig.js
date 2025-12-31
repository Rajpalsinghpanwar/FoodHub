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
        { name: "Dashboard", icon: LayoutDashboard, path: "/user/dashboard" }
      ]
    },
    {
      category: "Orders",
      items: [
        { name: "My Cart", icon: Package, path: "/user/cart" },
        { name: "My Orders", icon: Receipt, path: "/user/orders" },
        { name: "Live Tracking", icon: Truck, path: "/user/tracking" },
        { name: "Order History", icon: Receipt, path: "/user/history" }
      ]
    },
    {
      category: "Personalization",
      items: [
        { name: "Favorites & Wishlist", icon: Heart },
        { name: "Offers & Coupons", icon: Tag }
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
      items: [{ name: "Dashboard", icon: LayoutDashboard }]
    },
    {
      category: "Restaurant Management",
      items: [
        { name: "Restaurant Profile", icon: Store },
        { name: "Verification Status", icon: ShieldCheck }
      ]
    },
    {
      category: "Menu & Inventory",
      items: [
        { name: "Menu Management", icon: Package },
        { name: "Inventory Alerts", icon: Layers },
        { name: "Categories & Add-ons", icon: Layers }
      ]
    },
    {
      category: "Orders",
      items: [
        { name: "Incoming Orders", icon: Receipt },
        { name: "Active Orders", icon: Truck },
        { name: "Order History", icon: Receipt }
      ]
    },
    {
      category: "Marketing",
      items: [
        { name: "Offers & Discounts", icon: Tag }
      ]
    },
    {
      category: "Customer Interaction",
      items: [
        { name: "Customer Reviews", icon: MessageSquare }
      ]
    },
    {
      category: "Account & Support",
      items: [
        { name: "Profile Settings", icon: User },
        { name: "Help & Support", icon: HelpCircle },
        { name: "Logout", icon: LogOut }
      ]
    }
  ],

  DELIVERY: [
    {
      category: "Main",
      items: [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Availability Status", icon: Truck }
      ]
    },
    {
      category: "Deliveries",
      items: [
        { name: "New Requests", icon: Package },
        { name: "Active Deliveries", icon: Truck },
        { name: "Delivery History", icon: Receipt }
      ]
    },
    {
      category: "Earnings",
      items: [
        { name: "Earnings Overview", icon: Wallet },
        { name: "Incentives & Bonuses", icon: Tag },
        { name: "Payment History", icon: CreditCard }
      ]
    },
    {
      category: "Account",
      items: [
        { name: "Profile & Documents", icon: User },
        { name: "Vehicle Details", icon: Truck }
      ]
    },
    {
      category: "Support",
      items: [
        { name: "Help & Support", icon: HelpCircle },
        { name: "Logout", icon: LogOut }
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