"use client";

import { useState } from "react";
import {
  Home,
  Search,
  Package,
  Heart,
  MessageSquare,
  CreditCard,
  User,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard/renter" },
  { name: "Find Tools", icon: Search, href: "/dashboard/renter/findtools" },
  { name: "My Bookings", icon: Package, href: "/dashboard/renter/bookings" },
  { name: "Saved Tools", icon: Heart, href: "/dashboard/renter/saved" },
  { name: "Messages", icon: MessageSquare, href: "/dashboard/renter/messages" },
];

const accountItems = [
  { name: "Payments", icon: CreditCard, href: "/dashboard/payments" },
  { name: "Profile & Verification", icon: User, href: "/dashboard/profile" },
  { name: "Help & Support", icon: HelpCircle, href: "/dashboard/support" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const Item = ({ item }: any) => (
    <Link
      href={item.href}
      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-green-100 transition text-gray-700"
    >
      <item.icon className="w-5 h-5 text-green-700" />
      {item.name}
    </Link>
  );

  return (
    <>
      {/* 🔥 Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b">
        <button onClick={() => setOpen(true)}>
          <Menu className="w-7 h-7 text-green-700" />
        </button>
        <span className="font-semibold text-lg">AgriHire</span>
      </div>

      {/* 🌱 Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 h-screen border-r bg-white fixed left-0 top-0 py-6">
        <h2 className="text-2xl font-bold text-green-700 px-6 mb-6">
          AgriHire
        </h2>

        <div className="px-3 text-sm text-gray-500 mb-2">MAIN</div>
        <nav className="flex flex-col gap-1 px-3">
          {menuItems.map((item) => (
            <Item key={item.name} item={item} />
          ))}
        </nav>

        <div className="px-3 text-sm text-gray-500 mt-6 mb-2">ACCOUNT</div>
        <nav className="flex flex-col gap-1 px-3">
          {accountItems.map((item) => (
            <Item key={item.name} item={item} />
          ))}
        </nav>

        <div className="mt-auto px-3 py-4">
          <button className="flex items-center gap-3 px-4 py-2 w-full text-red-600 hover:bg-red-50 rounded-lg transition">
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </div>

      {/* 📱 Mobile Drawer Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* 📱 Mobile Sliding Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-xl font-semibold text-green-700">AgriHire</h2>
          <button onClick={() => setOpen(false)}>
            <X className="w-7 h-7 text-gray-700" />
          </button>
        </div>

        <div className="px-3 text-sm text-gray-500 mt-4 mb-2">MAIN</div>
        <nav className="flex flex-col gap-1 px-3">
          {menuItems.map((item) => (
            <Item key={item.name} item={item} />
          ))}
        </nav>

        <div className="px-3 text-sm text-gray-500 mt-6 mb-2">ACCOUNT</div>
        <nav className="flex flex-col gap-1 px-3">
          {accountItems.map((item) => (
            <Item key={item.name} item={item} />
          ))}
        </nav>

        <div className="mt-auto px-3 py-4">
          <button className="flex items-center gap-3 px-4 py-2 w-full text-red-600 hover:bg-red-50 rounded-lg transition">
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}
